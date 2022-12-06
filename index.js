var readlineSync = require('readline-sync'); 

let score = 0;

const userName = readlineSync.question("May I know your name? ");

console.log("Welcome "+userName);
console.log("___________________")


function play(question,answer)
  {
    userAnswer = readlineSync.question(question);

    if(userAnswer === answer)
    {
      console.log("You are right! ");
      score++;
    }
    else
    {
      console.log("You are wrong! ");
      score--;
    }
    console.log("Your score stands: "+score);
    console.log("___________________")
    
  }
console.log(`${userName} Answer confidently , Best of luck.`)
const quiz = [{
  question:"who is peter parker? ",
  answer:"spiderman"
},
           {
  question:"who is bruce Wayne? ",
  answer:"batman"
},
{
  question:"who is Clark Joseph Kent? ",
  answer:"superman"
},
{
  question:"who is Tony Stark? ",
  answer:"ironman"
},
{
  question:"who is shaktiman? ",
  answer:"gangadhar"
},
{
  question:"who is steve rogers? ",
  answer:"captain america"
}];

for(var i=0;i<quiz.length;i++)
  {
    const newQuiz = quiz[i];
    play(newQuiz.question,newQuiz.answer);
  }

