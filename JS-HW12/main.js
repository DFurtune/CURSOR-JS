async function getRandomChinese(length) {
  let i = 0;
  let time = "";
  while (i < length) {
    time += String.fromCharCode(Date.now()).slice(-5);
    i++;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(time);
      }, 50);
    });
  }
  console.log(time);
}
getRandomChinese(4);
