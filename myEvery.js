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

function myEvery(array, cb) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!cb(element)) return false;
  }
  return true;
}

console.log(tracks.every((track) => 'genre' in track));
console.log(myEvery(tracks, (track) => 'genre' in track));
