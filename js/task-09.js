import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  const userSortedByFriendsNumber = [...users]
    .sort(function (previous, next) {
      return previous.friends.length - next.friends.length;
    })
    .map(function (user) {
      return user.name;
    });

  return userSortedByFriendsNumber;
};

console.log(getNamesSortedByFriendsCount(users));
