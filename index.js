// const myCar = { .... };
// myCar.CarModel.type
const { Brand, CarModel, Car } = require('./db/models');
const { faker } = require('@faker-js/faker');

async function seed() {
  await Brand.create({ name: 'Mercedes' });
  await CarModel.create({ name: 'S-Class', brandId: 1, type: 'Sedan' });
  await Brand.bulkCreate([{ name: 'BMW' }, { name: 'Audi' }, { name: 'Volkswagen' }]);
  await CarModel.bulkCreate([
    { name: 'M3', brandId: 2, type: 'SUV' },
    { name: 'Q7', brandId: 3, type: 'SUV' },
    { name: 'Passat', brandId: 4, type: 'Sedan' },
    { name: 'Golf', brandId: 4, type: 'Hatchback' },
    { name: 'X5', brandId: 2, type: 'SUV' },
    { name: 'A4', brandId: 3, type: 'Sedan' },
    { name: 'Tiguan', brandId: 4, type: 'Crossover' },
  ]);
  await Car.bulkCreate([
    { color: 'Black', engine: 1.9, VIN: faker.string.uuid(), modelId: 1 },
    { color: 'Silver', engine: 2.5, VIN: faker.string.uuid(), modelId: 2 },
    { color: 'Red', engine: 2.0, VIN: faker.string.uuid(), modelId: 3 },
    { color: 'Blue', engine: 1.8, VIN: faker.string.uuid(), modelId: 4 },
    { color: 'White', engine: 2.2, VIN: faker.string.uuid(), modelId: 5 },
    { color: 'Green', engine: 1.6, VIN: faker.string.uuid(), modelId: 6 },
    { color: 'Brown', engine: 1.4, VIN: faker.string.uuid(), modelId: 7 },
    { color: 'White', engine: 5, VIN: faker.string.uuid(), modelId: 7 },
    { color: 'White', engine: 4.7, VIN: faker.string.uuid(), modelId: 7 },
    { color: 'Black', engine: 4.2, VIN: faker.string.uuid(), modelId: 4 },
    { color: 'Black', engine: 3.9, VIN: faker.string.uuid(), modelId: 4 },
    { color: 'Black', engine: 3.6, VIN: faker.string.uuid(), modelId: 3 },
    { color: 'Green', engine: 3.3, VIN: faker.string.uuid(), modelId: 2 },
    { color: 'Black', engine: 3.1, VIN: faker.string.uuid(), modelId: 4 },
    { color: 'Blue', engine: 1.8, VIN: faker.string.uuid(), modelId: 1 },
    { color: 'White', engine: 2.2, VIN: faker.string.uuid(), modelId: 2 },
    { color: 'Green', engine: 1.6, VIN: faker.string.uuid(), modelId: 3 },
  ]);
}

// seed()

const prettyLog = (data) =>
  console.dir(JSON.parse(JSON.stringify(data)), { depth: null });

(async function run() {
  try {
    // const brands = await Brand.findAll();
    // prettyLog(brands);
    // const carModels = await CarModel.findAll();
    // prettyLog(carModels);
    // const bmw = await Brand.findOne({
    //   where: {
    //     name: 'BMW',
    //   },
    //   include: CarModel,
    // });
    // prettyLog(bmw);
    // prettyLog(bmw.CarModels.map((model) => model.name));
    // const golf = await CarModel.findOne({
    //   where: {
    //     name: 'Golf',
    //   },
    //   include: Brand,
    // });
    // prettyLog(golf.Brand.name);
    // console.log(await Brand.findAll());
    // const bmw = await Brand.findOne({
    //   where: {
    //     name: 'BMW',
    //   },
    //   include: {
    //     model: CarModel,
    //     include: {
    //       model: Car,
    //     },
    //   },
    // });
    const car = await Car.findOne({
      where: {
        VIN: '10034db9-2c76-41f6-9d35-7c768181fe39',
      },
      include: {
        model: CarModel,
        include: {
          model: Brand,
        },
      },
    });
    prettyLog(car.CarModel.Brand.name);
  } catch (error) {
    console.log(error);
  }
})();
