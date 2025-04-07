import React from "react";

const UserItem = React.memo(({ user }: { user: User }) => {
  console.log(`re-render UserItem: ${user.name}`);
  return <li>{user.name}</li>;
});

export default UserItem;
