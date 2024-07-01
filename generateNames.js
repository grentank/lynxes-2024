const { fakerRU: faker } = require('@faker-js/faker');

function generateNames(num) {
  const names = [];
  for (let index = 0; index < num; index++) {
    const randomName = faker.person.fullName();
    names.push(randomName);
  }
  return names;
}

module.exports = generateNames;
