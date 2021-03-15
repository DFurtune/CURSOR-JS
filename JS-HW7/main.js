const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log(`Податок:`, getMyTaxes.call(latvia, 1500));

function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

console.log(`Середній податок:`, getMiddleTaxes.call(ukraine));

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log(`Загальний податок:`, getTotalTaxes.call(latvia));

function getMySalary() {
  const min = 1500;
  const max = 2000;

  setInterval(() => {
    mySalary = {};
    mySalary.salary = Math.floor(Math.random() * (max - min) + min);
    mySalary.taxes = Math.floor(this.tax * mySalary.salary * 100) / 100;
    mySalary.profit = mySalary.salary - mySalary.taxes;
    console.log(mySalary);
  }, 1000);
}

getMySalary.call(latvia);
