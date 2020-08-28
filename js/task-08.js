import users from "./users.js";

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => {
      if (user.friends.includes(friendName)) {
        return user;
      }
    })
    .map((user) => {
      return user.name;
    });

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
