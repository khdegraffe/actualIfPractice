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
