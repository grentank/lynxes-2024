const names = [
  'Alex',
  'Bob',
  'Charlie',
  'Dilan',
  'Elon',
  'Fedor',
];
const additionalNames = ['George', 'Bob'];

// REST
// function getData(arg1, arg2, ...restArguments) {
// }

// Мутирующие
// const res = names.push('George');
// const res = names.push(...additionalNames);
// const res = names.pop();
// const res = names.unshift('George');
// const res = names.shift();
// const res = names.splice(1, 3);
// const res = names.splice(1, 0, 67, { title: 'Hello' });
// const res = names.reverse();
// console.log({ res, names });

// Как массив превратить в строку
// const res = names.join('\n');
// const res = names.toString();
// const res = JSON.stringify(names);
// console.log({ res, names });

// Методы, которые не мутируют массив
// const res = names.slice(1, 3);
// const res = names.concat(additionalNames);
// const res = names.toSpliced(1, 3, 67, { title: 'Hello' });
// const res = names.toReversed();
// console.log({ res, names, isEqual: res === names });

// function isNameLongEnough(name) {
//     if(name.length > 10) return true;
//     else return false;
// }

// function isNameLongEnough(name) {
//   return name.length > 5;
// }

// const res = names.some(isNameLongEnough);
// const res = names.some((name) => name.length > 5);
// const res = names.every((name) => {
//     return name.length > 5
// });
// const res = names.filter((name) => {
//   if (name.toLowerCase().includes('a')) return false;
//   return true;
// });
// const res = names.filter(
//   (name) => !name.toLowerCase().includes('a'),
// );
const people = names.map((name) => ({
  name,
  age: Math.floor(Math.random() * 50),
}));
// console.log(
//   people.reduce((acc, person) => acc + person.age, 0),
// );
// console.log({ people });
// SORT - МУТИРУЕТ
// const res = people.sort(
//   (pers1, pers2) => pers2.age - pers1.age,
// );
// const res = people.toSorted(
//   (pers1, pers2) => pers2.age - pers1.age,
// );
// console.log({ res, people });

// filter -- если нужно убрать элементы
// map -- если нужно преобразовать элементы
// sort/toSorted -- если нужно отсортировать
// reduce -- аккумуляция одного значения

const tracks = [
  { title: 'Californication', genre: 'rock' },
  { title: 'Stairway to heaven', genre: 'rock' },
  { title: 'Paradise', genre: 'pop' },
  { title: 'Mresidence', genre: 'hip-hop' },
  { title: 'Blue', genre: 'pop' },
  { title: '10,000 hours', genre: 'rock' },
  { title: 'Run', genre: 'hip-hop' },
  { title: 'Nothing else matters', genre: 'rock' },
  { title: 'One more thing', genre: 'hip-hop' },
  { title: 'One more thing', genre: 'hip-hop' },
  { title: 'One more thing', genre: 'hip-hop' },
];

// const res = tracks.reduce((acc, track) => {
//   if (track.genre in acc) acc[track.genre]++;
//   else acc[track.genre] = 1;
//   return acc;
// }, {});

// const res = tracks.reduce((acc, track) => {
//   if (track.genre in acc) {
//     acc[track.genre].push(track.title);
//   } else acc[track.genre] = [track.title];
//   //   console.log(acc);
//   return acc;
// }, {});
// console.log({ res });

// for (const track of tracks) {
//   console.log(track.title);
// }

// tracks.forEach((track) => {
//   setTimeout(() => {
//     console.log(track.title);
//   }, track.genre.length * 1000);
// });

// КОПИРОВАНИЕ МАССИВОВ

// ПОВЕРХНОСТНОЕ
// const namesCopy = [...names];
// const namesCopy = names.slice();
// const namesCopy = names.map((el) => el);
// const namesCopy = names.filter(() => true);
// const res = namesCopy.reverse();
// console.log({ res, names, isEqual: res === names });

// console.log(tracks);
// const res = [...tracks].reverse();
// console.log(tracks === res);
// res[0].title = 'Changed';
// res[0].genre = 'SOME WEIRD GENRE';
// console.log(tracks);

// ГЛУБОКОЕ КОПИРОВАНИЕ
// const res = structuredClone(tracks).reverse();
const res = JSON.parse(JSON.stringify(tracks)).reverse();
console.log(tracks === res);
res[0].title = 'Changed';
res[0].genre = 'SOME WEIRD GENRE';
console.log(tracks);

// const person = { name: 'Elon Musk', age: 40 };

// person[1] = 'Bob';
// person[0] = 'Alex';
// person[2] = 'Charlie';
// names.name = 'Elon Musk';
// names.age = 40;

// console.log(person);
// console.log(names);

// for (let index = 0; index < 3; index++) {
//   console.log(names[index], person[index]);
// }

// for (const key in person) {
//   console.log(key, person[key]);
// }
// console.log('\n');

// for (const key in names) {
//   console.log(key, names[key]);
// }
