import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data));
    // console.log(users);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>fetch data example</h2>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <div key={id}>
            <img src={avatar_url} alt="" style={{ width: "70px" }} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default FetchData;
