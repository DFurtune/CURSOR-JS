class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marksArray = [];
    this.dismissed = false;
  }

  get marks() {
    if (this.dismissed) {
      return null;
    }

    return this.marksArray;
  }

  set marks(mark) {
    if (this.dismissed) {
      return console.log(null);
    }
    this.marksArray.push(mark);
  }
  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  getAverageMark() {
    const sum = this.marksArray.reduce((sum, number) => {
      return sum + number;
    }, 0);

    return +(sum / this.marksArray.length).toFixed(2);
  }

  dismiss() {
    this.dismissed = true;
  }

  recover() {
    this.dismissed = false;
  }
}

const dmytro = new Student(
  "Київського національного економічного університету",
  1,
  "Дмитро Фуртуне"
);

dmytro.marks = 5;
dmytro.marks = 4;
dmytro.marks = 4;
dmytro.marks = 5;

console.log("1.", dmytro.getInfo());
console.log("2.", dmytro.marks);
console.log("3.", (dmytro.marks = 5));
console.log("4.", dmytro.marks);
console.log("5", dmytro.getAverageMark());

dmytro.dismiss();
console.log("6.", dmytro.marks);

dmytro.recover();
console.log("7.", dmytro.marks);

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if (!this.dismissed && this.getAverageMark() >= 4) {
      console.log("Вам зараховано 1000 грн. стипендії");
    }
  }
}

const danylo = new BudgetStudent("універститет", "5", "Данило Гетьман");
danylo.marks = 3;
danylo.marks = 5;
