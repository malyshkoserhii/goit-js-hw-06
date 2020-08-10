import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
  const usersEyeColor = users.filter(function (user) {
    return user.eyeColor === "blue";
  });

  return usersEyeColor;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
