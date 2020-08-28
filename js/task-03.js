import users from "./users.js";

const getUsersWithGender = (users, gender) =>
  users
    .filter((user) => {
      return gender === user.gender;
    })
    .map((user) => {
      return user.name;
    });

console.log(getUsersWithGender(users, "male"));
