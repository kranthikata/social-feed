import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="p-4">
      <div className="flex items-center">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.displayName}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
