//Creating readlinesync
let promptLine = require('readline-sync');

//setting initial points
let points = 0;

//reading name
let name = promptLine.question(" What is you name? ");
//printing welcome message
console.log(`\nHai ${name}, Welcome to the game.`);
console.log('Let me check how well you know me.\n');

//questions array
const quiz = [
  {
    question: "\nWhat is my Age? ",
    answer: '19'
  },
  {
    question: "\nWhere do I live? ",
    answer: "Ottapalam"
  },
  {
    question: "\nMy favourite movie? ",
    answer: "Interstellar"
  },
  {
    question: "\nBikes or Cars? ",
    answer: "Bikes"
  },

  {
    question: "\nMy favourite colour? ",
    answer: "Blue"
  }
];

const highScore = [
  {
    name: "David",
    points: 50
  }
];
  



function playQuiz() {
//looping through each question
  quiz.forEach((arrayElement) => {
    //reading answer to the question
    userAnswer = promptLine.question(arrayElement.question);
    //cheching the answer
    if(userAnswer === arrayElement.answer) {
      //incrementing score
      points += 10;
      console.log(`Wow ${name}, good job. You got 10 points`);
    }
    else {
      console.log("Oops!,Thats wrong.");
    }
  })

//printing final score
if(points === 0){
  console.log(`\nYou got only ${points} points.\n No problem try once more.`)
}
else if(points > 0 || points <4) {
  console.log(`\nGreat job ${name}, you got ${points} points.`);
}
else {
  console.log(`\nProud of you ${name} you got ${points} points.`)
} 
}

playQuiz();

//function to print high score
function printHighScore() {
  console.log("\n\nHigh Score : \n")
  highScore.forEach((element) => {
    console.log(`\t${element.name} -> ${element.points} points.`)
  })
}
printHighScore();