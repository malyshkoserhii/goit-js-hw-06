import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  const allSkills = users.reduce(function (skills, user) {
    skills.push(...user.skills);

    return skills;
  }, []);

  const uniqueSkills = allSkills.filter(function (element, index, array) {
      return array.indexOf(element) === index;
    })
    .sort();

  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));