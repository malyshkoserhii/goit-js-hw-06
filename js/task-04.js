import users from "./users.js";

const getInactiveUsers = (users) => {
  const isActive = users.filter(function (user) {
    return !user.isActive;
  });

  return isActive;
};

console.log(getInactiveUsers(users));
