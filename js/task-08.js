import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  const userFriends = users
    .filter(function (user) {
      if (user.friends.includes(friendName)) {
        return user;
      }
    })
    .map(function (user) {
      return user.name;
    });

  return userFriends;
};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
