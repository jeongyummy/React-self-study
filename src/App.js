import "./App.css";
import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
  const users = [
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
  ];

  const nextId = useRef(4); // 파라미터 넣어주면 current 의 기본 값이 된다.
  const onCreate = () => {
    nextId.current += 1;
  };

  return <UserList users={users} />;
}

export default App;
