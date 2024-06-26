let readlineSync = require("readline-sync");
let score = 0;

let userName = readlineSync.question("What's your name? ");
console.log(`\nHello ${userName} welcome to Quizify`)
console.log("\nPlease select any options by typing either a/b/c/d\n")

/** Creating data set */
const database = {
  data: [
    {
      question: `let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true"
      },
      correctAnswer: "a"
    },
    {
      question: "Object.assign(targer, source) creates which type of copy?",
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference"
      },
      correctAnswer: "b"
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "b"
    },
    {
      question: `let num =10;
      function printNum(){
          let num =20;
          console.log(Number is:- ,num);
      }
      printNum(num);`,
      options: {
        a: "Number is :- 10",
        b: "Number is :- 20",
        c: "Number is :- undefined",
        d: "Number is :- error ,num is not defined",

      },
      correctAnswer: "b"
    },
    {
      question: "Is closure creates a laxical scope ?",
      options: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    }
  ]
}


/** Creating Leader Board*/
const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 1
    },
    {
      name: "Riya",
      score: 3
    },
    {
      name: "Jay",
      score: 2
    }
  ]
}

/** Main Logic */
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    score++
  } else {
    console.log(("Incorrect Answer"));
    console.log((`Correct Answer is ${correctAnswer}`))
  }
}

function showQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`)
    }
    let userAnswer = readlineSync.question("Enter your answer - (a/b/c/d) - ").toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer)
  }
}

function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score })
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(("\nCheck your position on the Leader Board"))
  for (let leader of sortedScoreList) {
    console.log((`${leader.name} -  Score: ${leader.score}`))
  }
}

showQuestionAndOptions(database);
console.log((`\nYour score is - ${score}`));
showHighScorer(leaderBoard);