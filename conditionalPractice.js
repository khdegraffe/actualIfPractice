let testGrade = Math.floor(Math.random() * 100);
console.log(testGrade);
let studentName = "Poppy";
if (testGrade <= 64) {
  console.log(`${studentName} received a F.`);
} else if (testGrade <= 70) {
  console.log(`${studentName} recieved a D.`);
} else if (testGrade <= 79) {
  console.log(`${studentName} recieved a C.`);
} else if (testGrade <= 89) {
  console.log(`${studentName} recieved a B.`);
} else {
  console.log(`${studentName} received an A!!`);
}

//MILITARY EXERCISE
let name = "Luuk";

let rank = "Private";

let age = 41;

if (age < 18) {
  console.log("You are too young for the military!");
} else if (name === "Rugen" && rank === "Count") {
  console.log(
    "My name is Inigo Montoya, you killed my father, prepare to die."
  );
} else if (rank === "Captain") {
  console.log(`Aye aye Captain ${name}`);
} else if (rank === "Private" && age > 40) {
  console.log(`What have you been doing with your life ${name}?`);
} else {
  console.log(
    `Hello ${rank} ${name}, I cannot wait to celebrate your ${
      age + 1
    }th birthday next year!`
  );
}

//MAGIC 8 BALL PROJECT

let userName = "Jane";

console.log(userName ? `Hello ${userName}!` : "Hello!");

let userQuestion = "will I have a new job by January 1st, 2026?";

console.log(`${userName} asks ${userQuestion}`);

let randomNum = Math.floor(Math.random() * 8);
console.log(randomNum);

let eightBall = "";

if (randomNum === 0) {
  eightBall = "It is certain";
} else if (randomNum === 1) {
  eightBall = "It is decidedly so";
} else if (randomNum === 2) {
  eightBall = "Reply hazy try again";
} else if (randomNum === 3) {
  eightBall = "Cannot predict now";
} else if (randomNum === 4) {
  eightBall = "Do not count on it";
} else if (randomNum === 5) {
  eightBall = "My sources say no";
} else if (randomNum === 6) {
  eightBall = "Outlook not so good";
} else {
  eightBall = "Signs point to yes";
}

console.log(eightBall);

//RACE DAY PROJECT

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;

let runnerAge = 15;

if (earlyRegistration === true && runnerAge >= 18) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && earlyRegistration === true) {
  console.log(`Runner number ${raceNumber}: You will race at 9:30AM.`);
} else if (runnerAge >= 18 && earlyRegistration !== true) {
  console.log(`Runner number ${raceNumber}: You will race at 11:00AM.`);
} else if (runnerAge < 18) {
  console.log(`Runner number ${raceNumber}: You will race at 12:30PM.`);
}

//Array Practice -- Secret Message Project
let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push("to", "Program");

secretMessage.splice(7, 1, "right");
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.splice(6, 5, "know");
console.log(secretMessage.join());

//Loops Exercise

//Given an array of names and a "target name", write a function that takes the array and "target name" as arguments and returns true if the name exists in the array or false if it does not.

const names = [
  "Sarah",
  "Josh",
  "Luke",
  "Kelsey",
  "Stef",
  "Robert",
  "Fiona",
  "Charlotte",
  "Jack",
];

// const targetName = "Charlotte";

const doesNameExist = function (array, targetName) {
  for (let i = 0; i < array.length; i++) {
    let name = array[i];

    name = name.toLowerCase();

    if (name === targetName) {
      return true;
    }
  }

  return false;
};

const doesCharltoteExist = doesNameExist(names, "Charlotte");

console.log(doesNameExist(names, "luke"));

//WHALE TALK PROJECT
//Rules
// 1) No consonants -- only vowels excluding "y"
// 2) The u's and e's are extra long, so we must double them in our program

const input = "All-time knicks choke job";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].toLowerCase() === "e") {
    resultArray.push(input[i]);
  }
  if (input[i].toLowerCase() === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i].toLowerCase() === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray);

let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
