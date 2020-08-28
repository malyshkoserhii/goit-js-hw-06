import users from "./users.js";

const getUserWithEmail = (users, email) =>
  users.filter((user) => {
    if (email === user.email) {
      return user;
    }
  });

