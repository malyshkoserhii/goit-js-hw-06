import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  const allSkills = users.reduce(function (skills, user) {
    skills.push(...user.skills);

    return skills;
  }, []);

  const uniqueSkills = allSkills.filter(function (element, index, array) {
      console.log(element)
      return element === 'lorem';
    })
    .sort();

  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));