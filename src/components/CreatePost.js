import React, { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CreatePost = ({ user }) => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text && files.length === 0) return;

    try {
      await addDoc(collection(db, "posts"), {
        text,
        files: files.map((file) => URL.createObjectURL(file)),
        createdAt: serverTimestamp(),
        userId: user.uid,
        userName: user.displayName,
      });
      setText("");
      setFiles([]);
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
