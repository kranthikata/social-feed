import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";
import { getAuth, signOut } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth);
    setUser(null);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      {user ? (
        <>
          <Profile user={user} />
          <CreatePost user={user} />
          <Feed />
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default App;
