import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  const userGender = users
    .filter(function (user) {
      return user.gender === "male";
    })
    .map(function (user) {
      return user.name;
    });

  return userGender;
};

console.log(getUsersWithGender(users, "male"));
