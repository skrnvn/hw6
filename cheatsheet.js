function someName(name = "Ihor") {
  console.log("Hello " + name);
}

const someFunc = function (name = "Ihor") {
  console.log("Hello Annon " + name);
};

someName();
someFunc("Jhon");

//===================

function sayHello(name = "Ihor") {
  return "Hello " + name;
}

const result = sayHello("Any text you like");
console.log(result, sayHello("Name2"), sayHello());

//====================

const functionPointer = someName;
functionPointer();

//====================

function getCount() {
  console.log(arguments);
  if (!arguments.length) {
    return "No arguments";
  }

  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(getCount());
console.log(getCount(1, 2, 3));

//=====================================

function getSum(a, b, ...args) {
  console.log(args, arguments);

  let result = a + b;
  for (let arg of args) {
    result += arg;
  }
  return result;
}

getSum(2, 4, 1, 2, 3, 4); // 7
getSum(1, 1); // 2

//=====================================

// const getSum = (a, b) => a + b;

// console.log(getSum(2, 4)); // 6

const getSum2 = (a, b) => {
  // no arguments in arrow function !!
  return a + b;
};

console.log(getSum2(2, 4)); // 6

//=====================================

const array = [...Array(10)];

const fillRandom = (el) => {
  return Math.floor(Math.random() * 10);
};

const newArr = array.map(fillRandom);

console.log(newArr);

//=====================================

function makeMultiply(x) {
  return function (y) {
    return x * y;
  };
}

let multiply = makeMultiply(2);

console.log(multiply(10));

//======================================

function gratingFunction(x, z) {
  return function (y, f = "------") {
    return x + y + " " + f + z;
  };
}

const grating = gratingFunction("Hello my friend ", " (^..^)!");
const names = ["Jhon", "Ihor", "Mike"];

console.log(grating);

names.forEach((name) => {
  console.log(grating(name));
});

console.log(grating("Jhon", "Carpenter"));

//======================================

function outputFunctio(text) {
  console.log(text);
}

const outputFunctioAlert = (text) => {
  alert(text);
};

function adder(x, y, func1, func2) {
  const res = x + y;
  if (res > 5) {
    func1(res);
  } else {
    func2(res);
  }
}

// adder(3, 3, outputFunctio, outputFunctioAlert);
// adder(3, 0, outputFunctio, alert);

//======================================

function makeFunc() {
  const name = " Browser";

  return (x) => {
    console.log(x + name);
  };
}

const myFunc = makeFunc();
//       v-------- is X variable
myFunc("Chrom");

//=======================================
// recursion
function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3)); // 8
