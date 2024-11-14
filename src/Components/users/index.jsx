import { useEffect, useState } from "react";

function Users() {
  const [user, setUser] = useState([]);

  async function fetchAllUsers() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      console.log(result);
      if (result?.users) {
        setUser(result?.users);
      } else {
        setUser([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //   useEffect(() => {
  //     fetchAllUsers();
  //   }, []);

  console.log(user);

  return (
    <div>
      <h2>All Users List</h2>
      <button onClick={fetchAllUsers}>fetch users list</button>
      <ol>
        {user ? (
          user.map((userItem) => (
            <li key={userItem.id}>
              <p>
                {userItem?.firstName} {userItem?.lastName}{" "}
              </p>
            </li>
          ))
        ) : (
          <p>no users found!</p>
        )}
      </ol>
    </div>
  );
}

export default Users;
