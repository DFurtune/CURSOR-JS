const getMaxDigit = (number) =>
  Math.max(...Array.from(String(number)).map((item) => parseInt(item)));

console.log(`Функція №1: найбільша цифра в числі 1236 є ${getMaxDigit(1236)}`);

function getDegreeOfNumber(number, degree) {
  let count = 1;
  for (let i = 0; i < degree; i++) {
    count *= number;
  }
  return count;
}

console.log(
  `Функція №2: розрахуємо число 6 в 5 степені = ${getDegreeOfNumber(6, 5)}`
);

function nameFormatting(name) {
  if (!name) return "Error: no inputed name";
  const strLowerCase = name.toLowerCase();
  return strLowerCase[0].toUpperCase() + strLowerCase.slice(1);
}

console.log(`Функція №3: відформатуємо dmytrO на ${nameFormatting("dmytrO")}`);

function getTax(sum) {
  const tax = 18 + 1.5;
  let sumAfterTax;
  sumAfterTax = sum - sum * tax;
  return sumAfterTax;
}

console.log(
  `Функція №4: 5000грн після сплати податку 19,5% становить ${getTax(5000)}грн`
);

function getRandomNumber(number1, number2) {
  const result = (Math.random() * (number2 - number1) + number1).toFixed(0);
  return result;
}

console.log(
  `Функція №5: випадкове ціле число в діапазоні від 1 до 10 становить ${getRandomNumber(
    1,
    10
  )}`
);

function letterCount(letter, word) {
  const toLowerCase = word.toLowerCase();
  let count = 0;
  for (let i = 0; i < toLowerCase.length; i++) {
    if (letter === toLowerCase[i]) {
      count++;
    }
  }
  return count;
}

console.log(
  `Функція №6: кількість букв "а" в слові "Марина" дорівнює ${letterCount(
    "а",
    "Марина"
  )}`
);

function convertCurrency(stringCurrency = "100$") {
  const currencyUsd = 27.85;
  const caseСurrency = stringCurrency.toLowerCase();
  if (caseСurrency.includes("uah")) {
    return (parseInt(stringCurrency) / currencyUsd).toFixed(2) + "$";
  } else if (caseСurrency.includes("$")) {
    return (parseInt(stringCurrency) * currencyUsd).toFixed(2) + "грн";
  } else {
    return "Помилка, необхідно ввести коректну валюту: $ або UAH";
  }
}

console.log(`Функція №7: 100$ коштує ${convertCurrency()}`);

function getPassword(passwordLenght = 8) {
  if (Number.isInteger(passwordLenght)) {
    let password = [];
    for (let i = 0; i < passwordLenght; i++) {
      password[i] = Math.floor(Math.random() * 10);
    }
    return `Генерація ${passwordLenght}-паролю=>${Number(password.join(""))}`;
  } else {
    return "Для паролю введіть лише цифри!";
  }
}

const getRandomPassword = getPassword();
console.log(`Функція №8: Сгенерований випадковий пароль: ${getRandomPassword}`);

function deleteAllLetters(letter, word) {
  const toLowerCaseLetter = letter.toLowerCase();
  const toLowerCaseWord = word.toLowerCase();
  let clientWord = "";
  for (let i = 0; i < toLowerCaseWord.length; i++) {
    if (toLowerCaseWord[i] !== toLowerCaseLetter) {
      clientWord += toLowerCaseWord[i];
    }
  }
  return `Видаляємо букву "${letter}" зі слова "${word}" => ${clientWord}`;
}

const getDeleteAllLetters = deleteAllLetters("о", "Коронавірус");
console.log(`Функція №9: ${getDeleteAllLetters}`);

function isPalindrome(word) {
  word = word.replace(/\s/g, "").toLowerCase();
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const getCheckForPalindrome = "Я несу гусеня";
console.log(`Функція №10: ${isPalindrome(getCheckForPalindrome)}`);

function deleteDuplicateLetter(word) {
  word = word.toLowerCase();
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    let countLetter = word.split(word[i]).length - 1;
    if (countLetter > 1) {
      continue;
    }
    newWord += word[i];
  }
  return newWord;
}
const sentence = "Бісквіт був дуже ніжним";
console.log(`Функція №11: ${deleteDuplicateLetter(sentence)}`);
