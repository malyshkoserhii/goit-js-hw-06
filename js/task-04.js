import users from "./users.js";

const getInactiveUsers = (users) =>
  users.filter((user) => {
    return !user.isActive;
  });

console.log(getInactiveUsers(users));
