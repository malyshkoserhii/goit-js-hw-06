import users from "./users.js";

const calculateTotalBalance = (users) => {
  const totalBalance = users
    .map(function (user) {
      return user.balance;
    })
    .reduce(function (accumulator, number) {
      return (accumulator += number);
    }, 0);

  return totalBalance;
};

console.log(calculateTotalBalance(users));
