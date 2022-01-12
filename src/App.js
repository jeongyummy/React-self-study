import React, { useRef, useState, useMemo } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";

function countActiveUsers(users) {
  console.log("Zz");
  return users.filter((user) => user.active).length;
}

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
      active: true,
    },
    {
      id: 2,
      username: "ohohoohoh",
      email: "oh@gamil.com",
      active: false,
    },
    {
      id: 3,
      username: "pizza",
      email: "hungry@gamil.com",
      active: false,
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

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
