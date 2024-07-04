const fs = require('fs');

const phoneRegex = /^(\+7|8)[ -]\(?(\d{3})\)?[ -](\d{3})[ -]?(\d{2})[ -]?(\d{2})/gm;

const reg = new RegExp()

const fileData = fs.readFileSync('phones.txt', 'utf-8');
const phones = fileData.match(phoneRegex);
const res = fileData.replaceAll(phoneRegex, '7($2)$3-$4-$5');

// 7(123)456-78-90

// console.log(res);

function timeRemainingTillLunch() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const year = now.getFullYear();
  const monthIndex = now.getMonth();
  const date = now.getDate();
  const lunchDate = new Date(
    year,
    monthIndex,
    date,
    12 + offset / 60,
    30 + (offset % 60),
  );
  // + .toString()
  // - * .valueOf()
  const diff = lunchDate.valueOf() - now.valueOf(); // lunchDate - now;
  const remainingDate = new Date(diff); // 1970 1 января 1:30 ночи
  //   console.log({
  //     remainingDate: remainingDate.toString(),
  //     lunchDate: lunchDate.toString(),
  //   });
  return `Осталось до обеда ${remainingDate.getHours()}:${remainingDate.getMinutes()}`;
}

console.log(timeRemainingTillLunch());
// console.log(new Date().toString());

function daysTillWeekend() {
  const now = new Date();
  const weekendDate = new Date(); // Четверг
  const newDays = 6 - now.getDay();
  weekendDate.setDate(now.getDate() + newDays); // +2 дня, суббота
  weekendDate.setHours(0, 0);
  const diff = weekendDate - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

console.log(daysTillWeekend());
