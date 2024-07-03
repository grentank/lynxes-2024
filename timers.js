function timerIterative(sec) {
  for (let time = sec; time >= 0; time--) {
    setTimeout(() => {
      console.log(time);
    }, (sec - time) * 1000);
  }
}

function timerRecursive(sec) {
  if (sec < 0) return;
  setTimeout(() => {
    console.log(sec);
    timerRecursive(sec - 1);
  }, 1000);
}

timerRecursive(5);
