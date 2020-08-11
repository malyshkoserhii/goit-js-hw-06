import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  const userFriends = users.reduce(function (acc, user) {
    return user.name;
  });

  return userFriends;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
