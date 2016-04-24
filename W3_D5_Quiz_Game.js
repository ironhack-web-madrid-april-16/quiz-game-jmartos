var read = require('read');

//QUESTION-----------------------------------------------
var Question = function(questionText, answerText, id){
  this.questionText = questionText;
  this.answerText = answerText;
  this.questionID = id;
  this.self = this;
};



//QUIZ---------------------------------------------------
var Quiz = function(){
  this.question_array = [];
}

Quiz.prototype.addQuestion = function (question){
  this.question_array.push(question);
}

Quiz.prototype.start = function(){
  this.actual_question = this.question_array[0];
  this.flow();
}

Quiz.prototype.actualQuestion = function (actualId){
  this.actual_question = this.question_array[actualId-1]
  this.flow();
}

Quiz.prototype.flow = function (){
  showQuestion = {
    prompt: this.actual_question.questionText + "\n=>"
  }

  read(showQuestion, this.displayAnswer(this))
}  

Quiz.prototype.displayAnswer = function (error, answer) {
  console.log(this.answer)
  this.compare(this.answer);
}

Quiz.prototype.compare = function(answer) {
  var actualId = this.actual_question.questionID;
  var answer = answer

  if (answer.toLowerCase() === question.answerText) {
    console.log("Your answer is right!");
    actualId = this.actual_question.questionID++;
  } else if (answer.toLowerCase() != question.answerText) {
    console.log("Your answer is wrong. Try again");
  }
  this.actualQuestion(actualId);
}




var question1 = new Question("Which is the capital of France", "paris", 1);
var question2 = new Question("Which is the highest mountain in the world", "everest", 2);

var quiz = new Quiz();

quiz.addQuestion(question1);
quiz.addQuestion(question2);

quiz.start();





