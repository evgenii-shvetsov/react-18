import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Bob" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <h2>user challenge</h2>

      {!user ? (
        <div>
          <h3>Please Login</h3>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      ) : (
        <div>
          <h3>Hello There, {user.name}</h3>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
