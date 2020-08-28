import users from "./users.js";

const getNamesSortedByFriendsCount = (users) =>
  [...users]
    .sort((previous, next) => {
      return previous.friends.length - next.friends.length;
    })
    .map((user) => {
      return user.name;
    });

console.log(getNamesSortedByFriendsCount(users));
