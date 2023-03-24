import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) return;
    const fakeId = Date.now()
    const newUser = {id: fakeId, name: name}
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers);
    setName("");
  };

  const handleDelete = (id) =>{
    // let target = users.find(user => user.id);
    let newArr = users.filter(user=> user.id !== id)
    setUsers(newArr)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <h2>users</h2>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <h5>{user.name}</h5>
            <button onClick={()=>handleDelete(user.id)} className="btn">delete user</button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
