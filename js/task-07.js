import users from "./users.js";

const calculateTotalBalance = (users) =>
  users
    .map((user) => {
      return user.balance;
    })
    .reduce((accumulator, number) => {
      return (accumulator += number);
    }, 0);

console.log(calculateTotalBalance(users));
