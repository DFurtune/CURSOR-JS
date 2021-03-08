function getRandomArray(length, min, max) {
  const result = Array.from({ length });

  return result.map(() => Math.round(Math.random() * (max - min) + min));
}

console.log(`Функція №1: ${getRandomArray(7, 1, 100)}`);

function getModa(...numbers) {
  let array = numbers.filter((number) => number % 1 == 0);
  const map = [];
  let max = -Infinity;
  array.forEach((item, index, currentAray) => {
    if (map[item] == null) {
      map[item] = 1;
    } else {
      map[item] = map[item] + 1;
    }
    if (map[item] > max) max = map[item];
  });
  const mode = map.reduce((total, item, index) => {
    if (item === max) total.push(index);
    return total;
  }, []);
  return mode;
}

console.log(`Функція №2: ${getModa(3.3, 5, 4, 4, 1, 1, 3.3, 3)}`);

function getAverage(...numbers) {
  const integerNumbers = numbers.filter((element) => Number.isInteger(element));
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = integerNumbers.reduce(reducer);

  return sum / integerNumbers.length;
}

console.log(
  `Функція №3: ${getAverage(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )}`
);

function getMedian(...numbers) {
  const integerNumbers = numbers.filter((element) => Number.isInteger(element));
  const sortedNumbers = integerNumbers.sort((first, second) => {
    if (first > second) {
      return 1;
    }

    if (first < second) {
      return -1;
    }

    return 0;
  });

  if (sortedNumbers.length % 2 !== 0) {
    const middleIndex = Math.floor(sortedNumbers.length / 2);

    return sortedNumbers[middleIndex];
  } else {
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    const evenMiddleIndex = middleIndex - 1;

    return (sortedNumbers[middleIndex] + sortedNumbers[evenMiddleIndex]) / 2;
  }
}

console.log(
  `Функція №4: ${getMedian(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )}`
);

function filterEvenNumbers(...numbers) {
  return numbers.filter((element) => element % 2 !== 0);
}

console.log(`Функція №5: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`);

function countPositiveNumbers(...numbers) {
  const filtered = numbers.filter((element) => element > 0);

  return filtered.length;
}

console.log(`Функція №6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`);

function getDividedByFive(...numbers) {
  return numbers.filter((element) => element % 5 === 0);
}

console.log(`Функція №7: ${getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)}
`);

function replaceBadWords(string) {
  const badWords = ["shit", "fuck"];
  const sentence = string.split(" ");

  const correctSentence = sentence.map((word) => {
    let newWord = word;

    for (let i = 0; i < badWords.length; i++) {
      const badWord = badWords[i];
      const badWordLength = badWord.length;

      newWord = word.replaceAll(badWord, "*".repeat(badWordLength));
    }

    return newWord;
  });

  return correctSentence.join(" ");
}

console.log(`Функція №8: ${replaceBadWords("Are you fucking kidding?")}`);

function divideByThree(word) {
  const letters = word.toLowerCase().replaceAll(" ", "").split("");

  return letters.reduce((accumulator, currentValue) => {
    if (accumulator.length === 0) {
      accumulator.push(currentValue);

      return accumulator;
    }

    const lastElement = accumulator[accumulator.length - 1];
    if (lastElement.length === 3) {
      accumulator.push(currentValue);

      return accumulator;
    }

    const newlastElement = lastElement + currentValue;
    accumulator.pop();
    accumulator.push(newlastElement);

    return accumulator;
  }, []);
}

console.log(`Функція №9: ${divideByThree("Commander")}`);
