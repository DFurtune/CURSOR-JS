const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function getAverage(...numbers) {
  const sum = numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return +(sum / numbers.length).toFixed(2);
}

function getSubjects(student) {
  const subjectsList = Object.keys(student.subjects);
  const result = subjectsList.map((subject) => {
    return (subject[0].toUpperCase() + subject.slice(1)).replaceAll("_", " ");
  });

  return result;
}

console.log(getSubjects(students[0]));

function getAverageMark(student) {
  const studentMarks = Object.values(student.subjects);

  const studentMarksList = studentMarks.reduce((list, mark) => {
    return list.concat(...mark);
  }, []);

  return getAverage(...studentMarksList);
}

console.log(getAverageMark(students[0]));

function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };
}

console.log(getStudentInfo(students[0]));

function getStudentsNames(students) {
  const names = students.map((student) => {
    return student.name;
  });

  return names.sort();
}

console.log(getStudentsNames(students));

function getBestStudent(students) {
  let bestMark = 0;
  let studentName = "";

  students.forEach((student) => {
    const currentMark = getAverageMark(student);
    if (bestMark < currentMark) {
      bestMark = currentMark;
      studentName = student.name;
    }
  });

  return studentName;
}

console.log(getBestStudent(students));

function calculateWordLetters(word) {
  return word.split("").reduce((accumulator, letter) => {
    const currentCount = accumulator[letter] || 0;

    return {
      ...accumulator,
      [letter]: currentCount + 1,
    };
  }, {});
}

console.log(calculateWordLetters("тест"));
