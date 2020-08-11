import users from "./users.js";

const getUsersWithAge = (users, min, max) => {
  const userAge = users.filter(function (user) {
    return user.age >= min && user.age <= max;
  });

  return userAge;
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
