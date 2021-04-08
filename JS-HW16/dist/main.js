/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/style.css?");

/***/ }),

/***/ "./src/hws/hw-1.js":
/*!*************************!*\
  !*** ./src/hws/hw-1.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"profitIncludingDiscount\": () => (/* binding */ profitIncludingDiscount)\n/* harmony export */ });\nconst breadPriceEa = 15.678;\r\nconst meatPriceKg = 123.965;\r\nconst tomatoesPriceKg = 90.2345;\r\n\r\n// console.log(`Bread price: ${breadPriceEa} uah/ea`);\r\n// console.log(`Meat price: ${meatPriceKg} uah/kg`);\r\n// console.log(`Tomatoes price: ${tomatoesPriceKg} uah/kg`);\r\n\r\n// Виведіть максимальне число\r\nconst maxPrice = Math.max(breadPriceEa, meatPriceKg, tomatoesPriceKg);\r\n// console.log(`Max price: ${maxPrice}`);\r\n\r\n// Виведіть мінімальне число\r\nconst minPrice = Math.min(breadPriceEa, meatPriceKg, tomatoesPriceKg);\r\n// console.log(`Min price: ${minPrice}`);\r\n\r\n// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму\r\nconst sumOfPrices = breadPriceEa + meatPriceKg + tomatoesPriceKg;\r\n// console.log(`Sum of prices: ${sumOfPrices}`);\r\n\r\n// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону\r\nconst sumOfIntegersOfPrices = Math.floor(breadPriceEa) + Math.floor(meatPriceKg) + Math.floor(tomatoesPriceKg);\r\n// console.log(`Sum of integers of prices: ${sumOfIntegersOfPrices}`);\r\n\r\n// Виведіть суму товарів округлену до сотень\r\nconst roundedToHundredsSumOfPrices = Math.round(sumOfPrices * 0.01) * 100;\r\n// console.log(`Rounded to hundreds sum of prices: ${roundedToHundredsSumOfPrices}`);\r\n\r\n// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?\r\nconst sumOfIntegersOfPricesIsEven = (sumOfIntegersOfPrices % 2) === 0;\r\n// console.log(`Sum of integers of prices is even number: ${sumOfIntegersOfPricesIsEven}`);\r\n\r\n// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн\r\nconst banknote500Uah = 500;\r\nconst theRestFrom500Uah = banknote500Uah - sumOfPrices;\r\n// console.log(`The rest from 500 uah: ${theRestFrom500Uah}`);\r\n\r\n// Виведіть середнє значення цін, округлене до другого знаку після коми\r\nconst averagePriceOfProducts = (sumOfPrices / 3).toFixed(2);\r\n// console.log(`The average price of products: ${averagePriceOfProducts}`);\r\n\r\n// Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random)\r\nconst randomDiscount = Math.random();\r\n\r\n// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми\r\nconst amountIncludingDiscount = (sumOfPrices * (1 - randomDiscount)).toFixed(2)\r\n    // console.log(`Amount to be paid including discount: ${amountIncludingDiscount}`);\r\n\r\n// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни\r\nconst profitIncludingDiscount = (amountIncludingDiscount - (sumOfPrices / 2)).toFixed(2);\r\nconsole.log(`Profit including discount: ${profitIncludingDiscount}`);\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-1.js?");

/***/ }),

/***/ "./src/hws/hw-10.js":
/*!**************************!*\
  !*** ./src/hws/hw-10.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"genarateRgbColor\": () => (/* binding */ genarateRgbColor)\n/* harmony export */ });\nconst title = document.getElementById('title');\r\nconst generateBlocksButton = document.getElementById('generate__blocks');\r\nconst blocksIntervalButton = document.getElementById('blocks__interval');\r\n\r\nlet blocksContainer;\r\n\r\nfunction genarateRgbColor() {\r\n    let rgbColor = [];\r\n    for (let i = 0; i < 3; i++) rgbColor.push(Math.trunc(Math.random() * 256));\r\n    return `rgb(${rgbColor})`;\r\n}\r\nconsole.log('genarateRgbColor: ', genarateRgbColor());\r\n\r\nfunction callFunctions() {\r\n    isInvisible();\r\n    generateBlocks();\r\n}\r\n\r\nfunction isInvisible() {\r\n    title.classList.toggle('invisible');\r\n    blocksIntervalButton.classList.toggle('invisible__none');\r\n}\r\n\r\nfunction generateBlocks() {\r\n    blocksContainer = document.createElement('div');\r\n    blocksContainer.style.cssText = `display: flex; flex-wrap: wrap; width: 250px; height: 250px; position: absolute; top: 35%; left: calc(50% - 125px); `;\r\n    blocksContainer.setAttribute('id', 'blocks__container');\r\n    title.before(blocksContainer);\r\n    for (let i = 0; i < 25; i++) {\r\n        const block = document.createElement('div');\r\n        block.style.cssText = `width: 50px; height: 50px; border-radius: 8px; background-color: ${genarateRgbColor()}`;\r\n        blocksContainer.prepend(block);\r\n    };\r\n    generateBlocksButton.disabled = true;\r\n}\r\n\r\nfunction generateBlocksInterval() {\r\n    setInterval(() => {\r\n        if (!blocksContainer) {\r\n            generateBlocks();\r\n        }\r\n        blocksContainer.remove();\r\n        generateBlocks();\r\n    }, 1000);\r\n    blocksIntervalButton.disabled = true;\r\n}\r\n\r\nfunction resetPage() {\r\n    document.location.reload();\r\n}\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-10.js?");

/***/ }),

/***/ "./src/hws/hw-11.js":
/*!**************************!*\
  !*** ./src/hws/hw-11.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getKayCode\": () => (/* binding */ getKayCode)\n/* harmony export */ });\nconst key = document.querySelectorAll('.key');\r\nconst piano = document.querySelectorAll('.piano');\r\nconst keyCode = [];\r\n\r\nfunction getKayCode() {\r\n    for (let index = 0; index < key.length; index++) {\r\n        keyCode.push(key[index].innerHTML);\r\n    };\r\n    return keyCode;\r\n};\r\n\r\ndocument.addEventListener('keydown', function(e) {\r\n    for (let index = 0; index < keyCode.length; index++) {\r\n        if (e.code == `Key${keyCode[index]}`) {\r\n            piano[index].currentTime = 0;\r\n            piano[index].play();\r\n            key[index].classList.add('key_down');\r\n        };\r\n    };\r\n});\r\n\r\ndocument.addEventListener('keyup', function(e) {\r\n    for (let index = 0; index < keyCode.length; index++) {\r\n        if (e.code == `Key${keyCode[index]}`) {\r\n            key[index].classList.remove('key_down');\r\n        };\r\n    };\r\n});\r\n\r\n//For mobile\r\nfor (let index = 0; index < key.length; index++) {\r\n    key[index].addEventListener('touchstart', function(e) {\r\n        if (e.type == \"touchstart\") {\r\n            piano[index].currentTime = 0;\r\n            piano[index].play();\r\n            key[index].classList.add('key_down');\r\n        };\r\n    });\r\n};\r\n\r\ndocument.addEventListener('touchend', function(e) {\r\n    for (let index = 0; index < key.length; index++) {\r\n        if (e.type == \"touchend\") {\r\n            key[index].classList.remove('key_down');\r\n        };\r\n    };\r\n});\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-11.js?");

/***/ }),

/***/ "./src/hws/hw-12.js":
/*!**************************!*\
  !*** ./src/hws/hw-12.js ***!
  \**************************/
/***/ (() => {

eval("async function getRandomChinese(length) {\r\n    let result = '';\r\n    let i = 0;\r\n\r\n    while (i < length) {\r\n\r\n        const promise = new Promise((resolve) => {\r\n\r\n            setTimeout(() => {\r\n                let sign = String.fromCharCode(String(Date.now()).substr(-5));\r\n                resolve(sign);\r\n            }, 50);\r\n\r\n        });\r\n\r\n        await promise.then(sign => {\r\n            result += sign;\r\n        });\r\n        i++;\r\n    };\r\n\r\n    console.log('result:', result);\r\n};\r\n\r\ngetRandomChinese(10);\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-12.js?");

/***/ }),

/***/ "./src/hws/hw-13.js":
/*!**************************!*\
  !*** ./src/hws/hw-13.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"title\": () => (/* binding */ title)\n/* harmony export */ });\nconst title = document.querySelector('h1');\r\nconsole.log('title: ', title);\r\nconst ost = document.querySelector('.ost');\r\nconst buttonsWrapper = document.querySelector('.buttons__wrapper');\r\nconst articlesWrapper = document.querySelector('.articles__wrapper');\r\nconst getInformationBut = document.querySelector('.get__information');\r\nconst getPlanetsBut = document.querySelector('.get__planets');\r\nconst nextBut = document.querySelector('.next');\r\nconst resetBut = document.querySelector('.reset');\r\n\r\n// getInformationBut.addEventListener('click', function() {\r\n//     ost.play();\r\n//     getInformationBut.disabled = true;\r\n\r\n//     async function getCharacters() {\r\n//         const filmsData = await axios.get(\"https://swapi.dev/api/films/2/\");\r\n//         const charactersList = filmsData.data.characters;\r\n//         console.log('charactersList:', charactersList);\r\n//         const charactersData = {};\r\n\r\n//         for (let i = 0; i < charactersList.length; i++) {\r\n//             const data = await axios.get(`${(charactersList[i].replace('http', 'https'))}`);\r\n//             charactersData[i] = {\r\n//                 name: data.data.name,\r\n//                 birth_year: data.data.birth_year,\r\n//                 gender: data.data.gender,\r\n//             };\r\n\r\n//             articlesWrapper.insertAdjacentHTML('beforeend', `\r\n//                 <article class=\"character\">\r\n//                     <img class=\"character__photo\" src=\"assets/images/photos/${(charactersData[i].name).replace(' ', '_').toLowerCase()}.jpg\" alt=\"character photo\">\r\n//                     <div class=\"character__data\">\r\n//                         <p class=\"character__name\"><span>Name:</span> ${charactersData[i].name}</p>\r\n//                         <p class=\"character__birth-year\"><span>Birth year:</span> ${charactersData[i].birth_year}</p>\r\n//                         <p class=\"character__gender\"><span>Gender:</span> ${charactersData[i].gender}</p>\r\n//                     </div>\r\n//                 </article>\r\n//             `);\r\n\r\n//         };\r\n\r\n//         return charactersData;\r\n//     };\r\n\r\n//     getCharacters().then(() => {\r\n//         title.classList.add('invisible');\r\n//         articlesWrapper.classList.remove('invisible');\r\n//         getPlanetsBut.classList.remove('invisible');\r\n//         resetBut.classList.remove('invisible');\r\n//     }).catch(() => {\r\n//         articlesWrapper.insertAdjacentHTML('beforeend', `\r\n//         <article class=\"character error\">\r\n//             <img class=\"character__photo\" src=\"assets/images/error.jpg\" alt=\"error\">\r\n//             <div class=\"character__data\">error</div>\r\n//         </article>\r\n//         `);\r\n//         title.classList.add('invisible');\r\n//         articlesWrapper.classList.remove('invisible');\r\n//         resetBut.classList.remove('invisible');\r\n//     });\r\n\r\n// });\r\n\r\n// getPlanetsBut.addEventListener('click', function() {\r\n//     ost.play();\r\n//     getPlanetsBut.disabled = true;\r\n//     nextBut.disabled = false;\r\n//     articlesWrapper.innerHTML = '';\r\n\r\n//     let planetsNames = [];\r\n\r\n//     axios.get(\"https://swapi.dev/api/planets/\")\r\n//         .then((res) => {\r\n//             const planetsData = res.data.results;\r\n//             planetsNames = planetsData.map((planet) => planet.name);\r\n//         }).then(() => {\r\n//             articlesWrapper.insertAdjacentHTML('beforeend', `\r\n//                 <article class=\"planet\">\r\n//                     <img class=\"planet__photo\" src=\"assets/images/planets/${(planetsNames[0]).replace(' ', '_')}.jpg\" alt=\"planet photo\">                    \r\n//                     <p class=\"planet__name\">${planetsNames[0]}</p>\r\n//                 </article>\r\n//             `);\r\n//             nextBut.classList.remove('invisible');\r\n//         }).then(() => {\r\n//             let i = 1;\r\n//             let n = 1;\r\n//             nextBut.addEventListener('click', function() {\r\n//                 articlesWrapper.innerHTML = '';\r\n\r\n//                 articlesWrapper.insertAdjacentHTML('beforeend', `\r\n//                     <article class=\"planet\">\r\n//                         <img class=\"planet__photo\" src=\"assets/images/planets/${(planetsNames[i]).replace(' ', '_')}.jpg\" alt=\"planet photo\">                    \r\n//                         <p class=\"planet__name\">${planetsNames[i]}</p>\r\n//                     </article>\r\n//                 `);\r\n//                 n += 1;\r\n//                 if (n > (planetsNames.length - 1)) {\r\n//                     nextBut.disabled = true;\r\n//                     getPlanetsBut.disabled = false;\r\n//                 };\r\n//                 return i++;\r\n//             });\r\n//         }).catch(() => {\r\n//             articlesWrapper.insertAdjacentHTML('beforeend', `\r\n//             <article class=\"character error\">\r\n//                 <img class=\"character__photo\" src=\"assets/images/error.jpg\" alt=\"error\">\r\n//                 <div class=\"character__data\">error</div>\r\n//             </article>\r\n//             `);\r\n//             title.classList.add('invisible');\r\n//             articlesWrapper.classList.remove('invisible');\r\n//             resetBut.classList.remove('invisible');\r\n//         });\r\n// });\r\n\r\n\r\n// resetBut.addEventListener('click', function() {\r\n//     document.location.reload()\r\n// });\r\n\r\n\r\n/* preloader */\r\n\r\nwindow.onload = function() {\r\n    document.body.classList.add('loaded_hiding');\r\n    window.setTimeout(function() {\r\n        document.body.classList.add('loaded');\r\n        document.body.classList.remove('loaded_hiding');\r\n    }, 500);\r\n}\r\n\r\n/* preloader end */\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-13.js?");

/***/ }),

/***/ "./src/hws/hw-15.js":
/*!**************************!*\
  !*** ./src/hws/hw-15.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"idGenerator\": () => (/* binding */ idGenerator)\n/* harmony export */ });\nconst idGeneratorBut = document.querySelector('#id-generator');\r\nconst idNumber = document.querySelector('#id-number');\r\nconst fontSizeUp = document.querySelector('#font-size-up');\r\nconst fontSizeDown = document.querySelector('#font-size-down');\r\nconst someText = document.querySelector('#id-number');\r\n\r\nfunction* createIdGenerator() {\r\n    let i = 1;\r\n    while (i < Infinity) {\r\n        yield i++;\r\n    };\r\n};\r\nconst idGenerator = createIdGenerator();\r\nconsole.log('idGenerator: ', idGenerator.next().value);\r\n\r\n// idGeneratorBut.addEventListener('click', () => {\r\n//     idNumber.innerHTML = '';\r\n//     idNumber.innerHTML = `${idGenerator.next().value}`\r\n// })\r\n\r\n\r\n// let defaultValue = 14;\r\n\r\n// function* newFontGenerator(upOrDown) {\r\n//     while (defaultValue) {\r\n//         if (upOrDown === 'up') {\r\n//             yield defaultValue = defaultValue + 2;\r\n//         } else if (upOrDown === 'down') {\r\n//             yield defaultValue = defaultValue - 2;\r\n//         };\r\n//     };\r\n// };\r\n\r\n// const fontGeneratorUp = newFontGenerator(\"up\");\r\n// const fontGeneratorDown = newFontGenerator(\"down\");\r\n\r\n// fontSizeUp.addEventListener('click', () => {\r\n//     document.querySelector('html').style.fontSize = `${fontGeneratorUp.next().value}px`;\r\n// })\r\n\r\n// fontSizeDown.addEventListener('click', () => {\r\n//     document.querySelector('html').style.fontSize = `${fontGeneratorDown.next().value}px`;\r\n// })\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-15.js?");

/***/ }),

/***/ "./src/hws/hw-2.js":
/*!*************************!*\
  !*** ./src/hws/hw-2.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"approval\": () => (/* binding */ approval)\n/* harmony export */ });\nconst approval = confirm('This program adds numbers from N to M. Do you want to continue?');\r\nif (approval) {\r\n\r\n    let numberN\r\n    do {\r\n        numberN = +prompt('Enter the number N (N must be an integer)');\r\n    } while (!Number.isInteger(numberN));\r\n    // console.log(`N = ${numberN}`);\r\n\r\n    let numberM\r\n    do {\r\n        numberM = +prompt('Enter the number M (M must be an integer)');\r\n    } while (!Number.isInteger(numberM));\r\n    // console.log(`M = ${numberM}`);\r\n\r\n    if (numberM < numberN) {\r\n        [numberN, numberM] = [numberM, numberN];\r\n    }\r\n\r\n    const countEvenNumbers = confirm('Do you want to exclude even numbers from the calculation?');\r\n    // console.log(`Do you want to exclude even numbers from the calculation? - ${countEvenNumbers}`);\r\n\r\n    let sumFromNToM = 0;\r\n\r\n    if (countEvenNumbers) {\r\n        for (let i = numberN; i <= numberM; i++) {\r\n            if (i % 2) {\r\n                sumFromNToM += i;\r\n            }\r\n        }\r\n    } else {\r\n        for (let i = numberN; i <= numberM; i++) {\r\n            sumFromNToM += i;\r\n        }\r\n    }\r\n\r\n    alert(`Sum from ${numberN} to ${numberM} = ${sumFromNToM}`);\r\n    // console.log(`Sum from ${numberN} to ${numberM} = ${sumFromNToM}`);\r\n\r\n} else {\r\n    alert('Have a nice day :)');\r\n}\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-2.js?");

/***/ }),

/***/ "./src/hws/hw-3.js":
/*!*************************!*\
  !*** ./src/hws/hw-3.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isPalyndrom\": () => (/* binding */ isPalyndrom)\n/* harmony export */ });\n// 1) Отримати будь-яке число та вивести найбільшу цифру в цьому числі\r\nfunction getMaxDigitOfNumber(number) {\r\n    const spreadOfNumber = String(number).split('');\r\n    const maxDigitOfNumber = Math.max(...spreadOfNumber);\r\n    return maxDigitOfNumber;\r\n}\r\n\r\n// 2) Функція, яка визначає ступінь числа\r\nfunction calcXToThePowerOfY(numberX, numberY) {\r\n    let xToThePowerOfY;\r\n    if (numberY === 0) {\r\n        xToThePowerOfY = 1;\r\n    } else if (numberY === 1) {\r\n        xToThePowerOfY = numberX;\r\n    } else if (numberY < 0) {\r\n        xToThePowerOfY = (1 / calcXToThePowerOfY(numberX, -numberY - 1)).toFixed(10);\r\n    } else {\r\n        xToThePowerOfY = numberX * calcXToThePowerOfY(numberX, numberY - 1);\r\n    }\r\n    return xToThePowerOfY;\r\n}\r\n\r\n// 4) Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати\r\nfunction calcSalaryAfterTaxes(salaryWithoutTaxes) {\r\n    const tax1 = 18;\r\n    const tax2 = 1.5;\r\n    const salaryAfterTaxes = (salaryWithoutTaxes * (1 - (tax1 + tax2) * 0.01)).toFixed(2);\r\n    return salaryAfterTaxes;\r\n}\r\n\r\n// 5) Функція, яка повертає випадкове ціле число в діапазоні від N до M\r\nfunction getRandomNumberFromNToM(numberN, numberM) {\r\n    const randomNumber = Math.random();\r\n    const randomNumberFromNToM = Math.round(numberN + randomNumber * (numberM - numberN));\r\n    return randomNumberFromNToM;\r\n}\r\n\r\n// 8) Функція генерації випадкового паролю\r\nfunction getRandomPassword(numberOfDigitsInPassword = 8) {\r\n    let randomNumber = Math.random();\r\n    if (randomNumber < 0.1) {\r\n        randomNumber = 1 - randomNumber;\r\n    }\r\n    randomPassword = Math.trunc(randomNumber * Math.pow(10, numberOfDigitsInPassword));\r\n    return randomPassword;\r\n}\r\n\r\n// 10) Функція, яка перевіряє, чи є слово паліндромом\r\nfunction isPalyndrom(palyndrom) {\r\n    let palyndromWithoutSpaces = palyndrom.split(' ').join('').toLowerCase();\r\n    let palyndromReverse = palyndromWithoutSpaces.split('').reverse().join('');\r\n    return palyndromReverse == palyndromWithoutSpaces;\r\n}\r\n\r\n// Виклик функцій\r\n// console.log(\r\n//     `Виклик функцій:\r\n//     Функція №1: ${getMaxDigitOfNumber(123456789)};\r\n//     Функція №2: ${calcXToThePowerOfY(7, -2)};\r\n//     Функція №4: ${calcSalaryAfterTaxes(30000)};\r\n//     Функція №5: ${getRandomNumberFromNToM(1, 100)};\r\n//     Функція №8: ${getRandomPassword()};\r\n//     Функція №10: ${isPalyndrom(\"Я несу гусеня\")}`\r\n// );\r\nconsole.log(`Функція №10: ${isPalyndrom(\"Я несу гусеня\")}`);\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-3.js?");

/***/ }),

/***/ "./src/hws/hw-4.js":
/*!*************************!*\
  !*** ./src/hws/hw-4.js ***!
  \*************************/
/***/ (() => {

eval("const students = [\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"];\r\nconst themes = [\"Диференційне рівняння\", \"Теорія автоматів\", \"Алгоритми і структури даних\"];\r\nconst marks = [4, 5, 5, 3, 4, 5];\r\n\r\n\r\n// Розділіть студентів на пари (хлопець + дівчина) для работи над проєктом\r\nfunction getPairsOfStudents(students) {\r\n    const studentsMen = [students[4], students[1], students[0]];\r\n    const studentsWomen = [students[2], students[3], students[5]];\r\n    let pairsOfStudents = [];\r\n    for (let index = 0; index < studentsMen.length; index++) {\r\n        pairsOfStudents[index] = [studentsMen[index], studentsWomen[index]];\r\n    }\r\n    return pairsOfStudents;\r\n}\r\nconst pairsOfStudents = getPairsOfStudents(students);\r\n// console.log('Pairs of students', pairsOfStudents);\r\n\r\n// Зіставте пари та теми проєктів, над якими студенти будуть працювати\r\nfunction getThemesForPairs(pairsOfStudents, themes) {\r\n    let themesForPairs = [];\r\n    for (let index = 0; index < themes.length; index++) {\r\n        themesForPairs[index] = [pairsOfStudents[index].join(' i '), themes[index]];\r\n    }\r\n    return themesForPairs;\r\n}\r\nconst themesForPairs = getThemesForPairs(pairsOfStudents, themes);\r\n// console.log('Themes for pairs', themesForPairs);\r\n\r\n// Зіставте оцінки(marks) зі студентом(students)\r\nfunction getMarksForStudents(students, marks) {\r\n    let marksForStudents = [];\r\n    for (let index = 0; index < students.length; index++) {\r\n        marksForStudents[index] = [students[index], marks[index]];\r\n    }\r\n    return marksForStudents;\r\n}\r\nconst marksForStudents = getMarksForStudents(students, marks);\r\n// console.log('Marks for students', marksForStudents);\r\n\r\n// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт\r\nfunction getMarksForPairs(pairsOfStudents, themes) {\r\n    const minRandomMark = 1;\r\n    const maxRandomMark = 5;\r\n    let randomMark;\r\n    let marksForPairs = [];\r\n    for (let index = 0; index < pairsOfStudents.length; index++) {\r\n        randomMark = Math.trunc(minRandomMark + Math.random() * (maxRandomMark - minRandomMark + 1));\r\n        marksForPairs[index] = [pairsOfStudents[index].join(' i '), themes[index], randomMark];\r\n    }\r\n    return marksForPairs;\r\n}\r\nconst marksForPairs = getMarksForPairs(pairsOfStudents, themes);\r\nconsole.log('Random marks for pairs of students', marksForPairs);\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-4.js?");

/***/ }),

/***/ "./src/hws/hw-5.js":
/*!*************************!*\
  !*** ./src/hws/hw-5.js ***!
  \*************************/
/***/ (() => {

eval("// 1) Створіть функцію, яка повертає масив випадкових цілих чисел\r\nfunction getRandomArray(length, min, max) {\r\n    let randomArray = [];\r\n    if (min > max) {\r\n        [min, max] = [max, min];\r\n    }\r\n    if (Number.isInteger(length) && Number.isInteger(min) && Number.isInteger(max)) {\r\n        for (let index = 0; index < length; index++) {\r\n            randomArray.push(Math.floor(min + Math.random() * (max - min + 1)))\r\n        }\r\n        return randomArray;\r\n    } else {\r\n        return 'Incorrectly entered data. Please, try again'\r\n    }\r\n}\r\nconst randomArray = getRandomArray(10, 1, 10, );\r\n// console.log('Array of random integers:', randomArray);\r\n\r\n// 3) Створіть функцію, яка рахує середнє арифметичне всіх переданих в неї аргументів\r\nfunction getAverage(...numbers) {\r\n    let numberIsAverage;\r\n    const numbersArr = numbers.filter(number => Number.isInteger(number));\r\n    return numberIsAverage = numbersArr.reduce((x, y) => x + y, 0) / numbersArr.length;\r\n}\r\nconst numberIsAverage = getAverage(1, 2.3, 3, 4, 5, '5a');\r\n// console.log('The arithmetic mean of all arguments:', numberIsAverage);\r\n\r\n// 5) Створіть функцію, яка фільтрує парні числа передані як аргументи функції\r\nfunction filterEvenNumbers(...numbers) {\r\n    let withoutEvenNumbersArr\r\n    return withoutEvenNumbersArr = numbers.filter(number => Number.isInteger(number) && number % 2);\r\n}\r\nconst withoutEvenNumbersArr = filterEvenNumbers(1, 2.3, 'a', 3, 4, 5, 8, '8a');\r\n// console.log('Even numbers are:', withoutEvenNumbersArr);\r\n\r\n// 6) Створіть функцію, яка порахує кількість чисел більших 0\r\nfunction countPositiveNumbers(...numbers) {\r\n    let positiveNumbersInArr;\r\n    return positiveNumbersInArr = numbers.filter(number => Number.isInteger(number) && number >= 0).length;\r\n}\r\nconst positiveNumbersInArr = countPositiveNumbers(1, -1, -5, -7, 10, 5, 3, -11);\r\n// console.log('The number of numbers is greater than 0:', positiveNumbersInArr);\r\n\r\n// 7) Створіть функцію, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5\r\nfunction getDividedByFive(...numbers) {\r\n    let dividedByFiveArr;\r\n    return dividedByFiveArr = numbers.filter(number => Number.isInteger(number) && !(number % 5));\r\n}\r\nconst dividedByFiveArr = getDividedByFive(1, -1, -5, -7, 10, 5, 3, -11, 15);\r\n// console.log('Elements that are divisible by 5:', dividedByFiveArr);\r\n\r\n// 9) Створіть функцію, яка розбиває кожне слово на умовні склади по 3 букви\r\nfunction divideByThree(words) {\r\n    let divideByThreeArr = [];\r\n    let wordsArr = words.split(' ').join('').toLowerCase();\r\n    for (let index = 0; index < wordsArr.length; index += 3) {\r\n        divideByThreeArr.push(wordsArr.slice(index, index + 3));\r\n    }\r\n    return divideByThreeArr;\r\n}\r\nconst divideByThreeArr = divideByThree('qweqweq WEQWEQW');\r\nconsole.log('The word is divided into syllables of 3 letters:', divideByThreeArr);\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-5.js?");

/***/ }),

/***/ "./src/hws/hw-6.js":
/*!*************************!*\
  !*** ./src/hws/hw-6.js ***!
  \*************************/
/***/ (() => {

eval("const students = [{\r\n    name: \"Tanya\",\r\n    course: 3,\r\n    subjects: {\r\n        math: [4, 4, 3, 4],\r\n        algorithms: [3, 3, 3, 4, 4, 4],\r\n        data_science: [5, 5, 3, 4]\r\n    }\r\n}, {\r\n    name: \"Victor\",\r\n    course: 4,\r\n    subjects: {\r\n        physics: [5, 5, 5, 3],\r\n        economics: [2, 3, 3, 3, 3, 5],\r\n        geometry: [5, 5, 2, 3, 5]\r\n    }\r\n}, {\r\n    name: \"Anton\",\r\n    course: 2,\r\n    subjects: {\r\n        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\r\n        english: [5, 3],\r\n        cosmology: [5, 5, 5, 5]\r\n    }\r\n}];\r\n\r\nconst someStudent = students[0]; // Enter a value for function #1-3;\r\nconst someWord = 'Cursor'; // Enter a value for function #6;\r\n\r\n// 1) Створіть функцію, яка повертає список предметів для конкретного студента\r\nfunction getSubjects(students) {\r\n    return Object.keys(students.subjects).map(subject => subject[0].toUpperCase() + subject.slice(1).replace('_', ' '));\r\n}\r\n// console.log(`List of subjects for ${someStudent.name}`, getSubjects(someStudent));\r\n\r\n// 2) Створіть функцію, яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку\r\nfunction getAverageMark(students) {\r\n    const listOfAllMarks = Object.values(students.subjects).flat();\r\n    const sumOfAllMarks = listOfAllMarks.reduce((x, y) => x + y, 0);\r\n    return +((sumOfAllMarks / listOfAllMarks.length).toFixed(2));\r\n}\r\n// console.log(`Average mark in all subjects for ${someStudent.name}:`, getAverageMark(someStudent));\r\n\r\n// 3) Створіть функцію, яка повертає інформацію загального виду по переданому студенту\r\nfunction getStudentInfo(students) {\r\n    const studentInfo = {\r\n        course: students.course,\r\n        name: students.name,\r\n        averageMark: getAverageMark(students),\r\n    }\r\n    return studentInfo;\r\n}\r\n// console.log(`General information about the ${someStudent.name}`, getStudentInfo(someStudent));\r\n\r\n// 4) Ствроіть функцію, яка повертає імена студентів у алфавітному порядку\r\nfunction getStudentsNames(students) {\r\n    return students.map(student => student.name).sort();\r\n}\r\n// console.log('Names of students in alphabetical order', getStudentsNames(students));\r\n\r\n// 5) Створіть функцію, яка повертає кращого студента зі списку по показнику середньої оцінки\r\nfunction getBestStudent(students) {\r\n    let averageMarkOfEachStudent = [];\r\n    students.map((student, index) => {\r\n        averageMarkOfEachStudent.push({\r\n            name: students[index].name,\r\n            averageMark: getAverageMark(students[index]),\r\n        });\r\n    });\r\n    averageMarkOfEachStudent.sort((a, b) => (+b.averageMark) - (+a.averageMark));\r\n    return averageMarkOfEachStudent[0].name;\r\n}\r\n// console.log('The best student on the average mark:', getBestStudent(students));\r\n\r\n// 6) Створіть функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.\r\nfunction calculateWordLetters(someWord) {\r\n    const arrOfLettersOfWord = someWord.toLowerCase().split('');\r\n    const lettersOfWord = {};\r\n    for (const element of arrOfLettersOfWord) {\r\n        lettersOfWord[element] = (arrOfLettersOfWord.filter((letter) => element === letter)).length;\r\n    }\r\n    return lettersOfWord;\r\n}\r\nconsole.log(`Object with letters of the word '${someWord}'`, calculateWordLetters(someWord));\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-6.js?");

/***/ }),

/***/ "./src/hws/hw-7.js":
/*!*************************!*\
  !*** ./src/hws/hw-7.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMyTaxes\": () => (/* binding */ getMyTaxes)\n/* harmony export */ });\nconst ukraine = { name: 'Ukraine', tax: 0.195, middleSalary: 1789, vacancies: 11476 };\r\nconst latvia = { name: 'Latvia', tax: 0.25, middleSalary: 1586, vacancies: 3921 };\r\nconst litva = { name: 'Litva', tax: 0.15, middleSalary: 1509, vacancies: 1114 };\r\n\r\nconst myCountry = ukraine;\r\n\r\n// 1) Створіть функцію, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн\r\nfunction getMyTaxes(salary) {\r\n    return this.tax * salary;\r\n}\r\nconsole.log(`The amount of salary tax in ${myCountry.name}:`, getMyTaxes.call(myCountry, 2000));\r\n\r\n// 2) Створіть функцію, яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні\r\nfunction getMiddleTaxes(country) {\r\n    return +((this.tax * this.middleSalary).toFixed(2));\r\n}\r\n// console.log(`The amount of middle salary tax in ${myCountry.name}:`, getMiddleTaxes.call(myCountry));\r\n\r\n// 3) Створіть функцію, яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні\r\nfunction getTotalTaxes(country) {\r\n    return this.tax * this.middleSalary * this.vacancies;\r\n}\r\n// console.log(`The total amount of middle salary tax in ${myCountry.name}:`, getTotalTaxes.call(myCountry));\r\n\r\n// 4) Створіть функцію, яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number }\r\n//    кожні 10 секунд\r\nfunction getMySalary(country) {\r\n    const minSalary = 1500;\r\n    const maxSalary = 2500;\r\n    setInterval(() => {\r\n        const randomSalary = minSalary + Math.trunc(Math.random() * (maxSalary - minSalary + 1));\r\n        const taxes = +((this.tax * randomSalary).toFixed(2));\r\n        const profit = +((randomSalary - taxes).toFixed(2));\r\n        mySalary = { salary: randomSalary, taxes: taxes, profit: profit };\r\n        console.log(`My object with data for ${myCountry.name}:`, mySalary);\r\n    }, 10000)\r\n}\r\n// getMySalary.call(myCountry);\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-7.js?");

/***/ }),

/***/ "./src/hws/hw-8.js":
/*!*************************!*\
  !*** ./src/hws/hw-8.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jackSmith\": () => (/* binding */ jackSmith)\n/* harmony export */ });\nclass Student {\r\n    constructor(university, course, fullName, ) {\r\n        this.university = university;\r\n        this.course = course;\r\n        this.fullName = fullName;\r\n        this.arrMarks;\r\n        this.learningStatus = true;\r\n    }\r\n    get getInfo() {\r\n        return `A ${this.course}-year student of ${this.university} ${this.fullName}`;\r\n    }\r\n    get marks() {\r\n        return this.learningStatus == false ? null : this.arrMarks;\r\n    }\r\n    set marks(arrMarks) {\r\n        return this.learningStatus == false ? null : this.arrMarks.push(arrMarks);\r\n    }\r\n    get getAverageMark() {\r\n        return this.arrMarks.reduce((x, y) => x + y, 0) / this.arrMarks.length;\r\n    }\r\n    dismiss() {\r\n        return this.learningStatus = false;\r\n    }\r\n    recover() {\r\n        return this.learningStatus = true;\r\n    }\r\n}\r\n\r\nconst jackSmith = new Student('University of Oxford', '3', 'Jack Smith', );\r\n\r\n// інформація про стдента\r\nconsole.log(`General information about the student:`, jackSmith.getInfo);\r\n\r\n// присвоюємо оцінки студенту\r\njackSmith.arrMarks = [5, 4, 4, 5, ];\r\n// console.log(`Student ${jackSmith.fullName}'s marks at the beginning:`, jackSmith.marks);\r\n\r\n// додаємо оцінку студенту\r\njackSmith.marks = 4;\r\n// console.log(`Student ${jackSmith.fullName}'s marks after geting the next mark:`, jackSmith.marks);\r\n\r\n// визачаємо середню оцінку для студента\r\n// console.log(`Student ${jackSmith.fullName}'s avrage mark:`, jackSmith.getAverageMark);\r\n\r\n// відраховуємо студента\r\njackSmith.dismiss();\r\n// console.log(`Student ${jackSmith.fullName}'s marks after dismiss:`, jackSmith.marks);\r\n\r\n// додаємо оцінку студенту після відрахування\r\njackSmith.marks = 5;\r\n// console.log(`Student ${jackSmith.fullName}'s marks after geting the next mark after dismiss:`, jackSmith.marks);\r\n\r\n// поновлюємо студента\r\njackSmith.recover();\r\n// console.log(`Student ${jackSmith.fullName}'s marks after recover:`, jackSmith.marks);\r\n\r\n\r\n\r\n// Advanced\r\n// console.log('*** Advanced ***');\r\n\r\nclass BudgetStudent extends Student {\r\n    constructor(university, course, fullName, ) {\r\n            super(university, course, fullName, );\r\n            setInterval(() => this.getScholarship, 30000);\r\n        }\r\n        // get getScholarship() {\r\n        // this.learningStatus && this.getAverageMark >= 4 ?\r\n        // console.log(`${this.fullName}, you received a £ 1,400 scholarship`) :\r\n        // console.log(`${this.fullName}, you must learning better!!!`);\r\n        // }\r\n}\r\n\r\nconst johnSmith = new BudgetStudent('University of Oxford', '2', 'John Smith', );\r\n\r\n// присвоюємо оцінки студенту\r\njohnSmith.arrMarks = [4, 4, 4, 5, ];\r\n// console.log(`Student ${johnSmith.fullName}'s marks:`, johnSmith.marks);\r\n\r\n// визачаємо середню оцінку для студента\r\n// console.log(`Student ${johnSmith.fullName}'s avrage mark:`, johnSmith.getAverageMark);\r\n\r\n// статус студента\r\n// console.log(`Student ${johnSmith.fullName}'s learnin sgtatus:`, johnSmith.learningStatus);\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/hws/hw-8.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _hws_hw_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hws/hw-1 */ \"./src/hws/hw-1.js\");\n/* harmony import */ var _hws_hw_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hws/hw-2 */ \"./src/hws/hw-2.js\");\n/* harmony import */ var _hws_hw_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hws/hw-3 */ \"./src/hws/hw-3.js\");\n/* harmony import */ var _hws_hw_4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hws/hw-4 */ \"./src/hws/hw-4.js\");\n/* harmony import */ var _hws_hw_4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hws_hw_4__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hws_hw_5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hws/hw-5 */ \"./src/hws/hw-5.js\");\n/* harmony import */ var _hws_hw_5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hws_hw_5__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hws_hw_6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hws/hw-6 */ \"./src/hws/hw-6.js\");\n/* harmony import */ var _hws_hw_6__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_hws_hw_6__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hws_hw_7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hws/hw-7 */ \"./src/hws/hw-7.js\");\n/* harmony import */ var _hws_hw_8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hws/hw-8 */ \"./src/hws/hw-8.js\");\n/* harmony import */ var _hws_hw_10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hws/hw-10 */ \"./src/hws/hw-10.js\");\n/* harmony import */ var _hws_hw_11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hws/hw-11 */ \"./src/hws/hw-11.js\");\n/* harmony import */ var _hws_hw_12__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hws/hw-12 */ \"./src/hws/hw-12.js\");\n/* harmony import */ var _hws_hw_12__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_hws_hw_12__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _hws_hw_13__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hws/hw-13 */ \"./src/hws/hw-13.js\");\n/* harmony import */ var _hws_hw_15__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hws/hw-15 */ \"./src/hws/hw-15.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://adv-hw-16-olehmykolaichuk/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;