function* getIdGenerator() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

const idGenerator = getIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
