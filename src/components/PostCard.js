import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <h4 className="font-bold">{post.userName}</h4>
      <p className="my-2">{post.text}</p>
      {post.files &&
        post.files.map((file, index) => (
          <img
            key={index}
            src={file}
            alt="uploaded"
            className="w-full h-48 object-cover my-2"
          />
        ))}
      <p className="text-gray-500 text-sm">
        {post.createdAt?.toDate().toLocaleString()}
      </p>
    </div>
  );
};

export default PostCard;
