import React from "react";

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
      {/* onClick={onRemove(user.id)} 구조로 클릭함수를 실행하면 해당 컴포넌트가 렌더링 됨과 동시에
       함수를 실행시킵니다. 그래서 ()를 제외하는 방법으로 함수가 즉시 실행되지 않고 클릭이 될 경우에 실행되도록 합니다.*/}
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
