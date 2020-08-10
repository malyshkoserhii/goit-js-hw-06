import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  const userGender = users
    .filter(function (user) {
      if (gender === user.gender){
        return user;
      }
    })
    .map(function (user) {
      return user.name;
    });

  return userGender;
};

console.log(getUsersWithGender(users, "male"));
