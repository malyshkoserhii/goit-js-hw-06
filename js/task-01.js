import users from "./users.js";

const getUserNames = (users) => {
  const userNames = users.map(function (user) {
    return user.name;
  });

  return userNames;
};

console.log(getUserNames(users));
