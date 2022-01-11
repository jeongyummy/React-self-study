import React, { useRef, useState } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "jeongyeon",
      email: "jeong@gamil.com",
    },
    {
      id: 2,
      username: "ohohoohoh",
      email: "oh@gamil.com",
    },
    {
      id: 3,
      username: "pizza",
      email: "hungry@gamil.com",
    },
  ]);

  const nextId = useRef(4); // 파라미터 넣어주면 current 의 기본 값이 된다.
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email, // 배열에 추가할 목록들
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user)); + concat 써서도 할 수 있음(기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열 생성)

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
