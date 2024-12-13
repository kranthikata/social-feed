import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";
import PostCard from "./PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const postsRef = collection(db, "posts");
    let q = query(postsRef, orderBy("createdAt", "desc"), limit(20));

    if (lastDoc) {
      q = query(
        postsRef,
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(20)
      );
    }

    const snapshot = await getDocs(q);
    const newPosts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts((prev) => [...prev, ...newPosts]);
    setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading
    ) {
      fetchPosts();
    }
  };

  return (
    <div className="p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Feed;
