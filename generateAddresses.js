const { fakerRU: faker } = require('@faker-js/faker');

function generateAddresses(num) {
  return new Array(num) // new создаёт новый объект
    .fill(null)
    .map(() => faker.location.streetAddress());
}

module.exports = generateAddresses;
