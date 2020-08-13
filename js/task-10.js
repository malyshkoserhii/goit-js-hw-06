import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  const allSkills = users.reduce(function (skills, user) {
    skills.push(...user.skills);

    return skills;
  }, []);

  const uniqueSkills = allSkills
    .reduce(function (originalSkills, skills) {
      if (!originalSkills.includes(skills)) {
        originalSkills.push(skills);
      }

      return originalSkills;
    }, [])
    .sort();

  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));
