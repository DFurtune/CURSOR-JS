let firstEnter;
do {
  firstEnter = prompt("Введіть число N");
  firstEnter = parseInt(firstEnter, 10);
} while (isNaN(firstEnter));
console.log(firstEnter, typeof firstEnter);

let secondEnter;
do {
  secondEnter = prompt("Введіть число M");
  secondEnter = parseInt(secondEnter, 10);
} while (isNaN(secondEnter));
console.log(secondEnter, typeof secondEnter);
console.log(`Значення N = ${firstEnter}, M ${secondEnter}`);

if (firstEnter > secondEnter) {
  [firstEnter, secondEnter] = [secondEnter, firstEnter];
  console.log(`Переставляємо місцями N = ${firstEnter} M = ${secondEnter}`);
}
console.log(`Переставляємо місцями N = ${secondEnter} M = ${firstEnter}`);
let sum = 0;

const skipNumbers = confirm("Пропускати парні числа?");
if (skipNumbers === true) {
  console.log("Пропускаємо парні числа");
  for (let i = firstEnter; i <= secondEnter; i++) {
    if (i % 2 === 0) {
      continue;
    }
    sum = sum + i;
  }
  console.log(`Сума при пропуску парних чисел: ${sum}`);
  document.writeln(`Сума при пропуску парних чисел: ${sum}`);
} else {
  for (let i = firstEnter; i <= secondEnter; i++) {
    sum = sum + i;
  }
  console.log(`Сума чисел: ${sum}`);
  document.writeln(`Сума чисел: ${sum}`);
}
