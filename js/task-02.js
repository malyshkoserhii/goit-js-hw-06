import users from "./users.js";

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => {
    if (color === user.eyeColor) {
      return user;
    }
  });

console.log(getUsersWithEyeColor(users, "blue"));
