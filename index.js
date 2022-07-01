function fillArray(num, word) {
  const filledArr = [...Array(num)];
  return filledArr.map((el) => word);
}

console.log(fillArray(6, "kek"));
console.log(fillArray(13, "lol"));

//===================

function filterArray(randArray, ...args) {
  // const newArr = [];
  // for (let i = 0; i < randArray.length; i++) {
  //   if (!args.includes(randArray[i])) {
  //     newArr.push(randArray[i]);
  //   }
  // }
  return randArray.filter((value) => !args.includes(value));
}

// console.log(filterArray([5, 6], 3, 6, 1));
let array = [0, 1, 2, null, undefined, "qwerty", false];
let result = filterArray(array, false, undefined, "", 0, null);
console.log(result);

//   let array = [0, 1, 2, null, undefined, "qwerty", false];
//   let result = filterArray(array, false, undefined, "", 0, null);

//===================

function calcSum(...args) {
  return args.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}

console.log(calcSum(0));
console.log(calcSum(1, 2, 3));
console.log(calcSum(5, 0, 10, 1, 5));

//===================

function createPipe(opening = "====", closing = "====") {
  return function (text = "some random text") {
    return opening + " " + text + " " + closing;
  };
}

const pipeFunction = createPipe();

console.log(pipeFunction());

//===================

function testFunc(text) {
  return text;
}

function someFunc(printFunc, someText) {
  console.log(printFunc(someText));
  alert(printFunc(someText));
}

someFunc(testFunc, "some text");
