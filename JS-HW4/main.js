const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
  const girls = [students[2], students[3], students[5]];
  const boys = [students[0], students[1], students[4]];
  let studentPair = [];
  for (i = 0; i < boys.length; i++) {
    studentPair[i] = [boys[i], girls[i]];
  }
  return studentPair;
}

function getThemes(pairs, themes) {
  let studentPairThemes = [];
  for (let i = 0; i < pairs.length; i++) {
    studentPairThemes[i] = [pairs[i], themes[i]];
  }
  return studentPairThemes;
}

function getMarks(students, marks) {
  let studentsMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsMarks[i] = [students[i], marks[i]];
  }
  return studentsMarks;
}

function getMarksStudentsThemes(studentPair, themes) {
  const studentsMarksThemes = [];
  for (let i = 0; i < studentPair.length; i++) {
    mark = Math.floor(Math.random() * 5) + 1;
    studentsMarksThemes[i] = [studentPair[i], themes[i], mark];
  }
  return studentsMarksThemes;
}

const pairs = getPairs(students);
const pairsThemes = getThemes(pairs, themes);
const marksStudents = getMarks(students, marks);
const marksStudentsThemes = getMarksStudentsThemes(pairs, themes);
console.log(pairs);
console.log(pairsThemes);
console.log(marksStudents);
console.log(marksStudentsThemes);
