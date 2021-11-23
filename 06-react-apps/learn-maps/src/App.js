import { useState } from "react";
import UserList from "./components/user-list/user-list.component";
import Users, { defaultUsers } from "./utils/user.class";

function App() {
  // Users is an array of all the users we have
  const [users, setUsers] = useState(defaultUsers);

  const _addRandomUser = () => {
    let  newUser = Users.NewRandomUser();
    if (users.length >= 10) {
      let newList = users.slice(1);
      newList.push(newUser);
      setUsers(newList);
      return;
    } else {
      setUsers([...users, newUser]);
    }
  };

  const _deleteLastUser = () => {
    if (users.length === 3) {
      // setUsers(defaultUsers);
      users.pop();
      return;
    }
    setUsers([...users]);
  }

  return (
    <div className="content">
      <h2 style={{ textDecoration: "underline", marginBlockEnd: "2rem" }}>
        User Management
      </h2>
      <div style={{ borderBottom: "1px solid black" }}>
        <button onClick={_addRandomUser}>Add Random User</button>
        <button onClick={_deleteLastUser}>Delete Last User</button>
      </div>
      <UserList users={users} />
    </div>
  );
}

export default App;
