// const { faker } = require('@faker-js/faker');
// or, if desiring a different locale
// const { fakerRU: faker } = require('@faker-js/faker');
// const generateNames = require('./generateNames');

const generateAddresses = require('./generateAddresses');
const generateNames = require('./generateNames');
const writeData = require('./writeData');

function run() {
  const arg = Number(process.argv[2]);

  // arg === undefined, null
  if (Number.isNaN(arg)) {
    // NaN всегда даёт false при сравнении
    throw new Error(
      `Аргумент должен быть числом, а получили: ${process.argv[2]}`,
    );
  }

  const names = generateNames(arg);
  const addresses = generateAddresses(arg);

  writeData(names, addresses);
}

run();
