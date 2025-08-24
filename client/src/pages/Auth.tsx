import { useState } from "react";

const Auth = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.id]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.id]: e.target.value })
            }
          />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Auth;
