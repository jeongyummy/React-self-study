import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log("1");
    return () => {
      console.log("22");
    };
  }, []);
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "red" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>

      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
      {/* onClick={onRemove(user.id)} 구조로 클릭함수를 실행하면 해당 컴포넌트가 렌더링 됨과 동시에
       함수를 실행. 그래서 ()를 제외하는 방법으로 함수가 즉시 실행되지 않고 클릭이 될 경우에 실행되도록 한다.*/}
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
