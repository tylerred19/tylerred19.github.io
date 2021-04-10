//Question Part
//Contructor
//this.text: variable
//text: parameter

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

//Controller Part
//Containing the scores, number of questions

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//Index of current question
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

//Check if the quiz is ended
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

//Check if correct answer = selected answer
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
        alert("Correct!");
    } else {
        alert("Incorrect.. The correct answer is: " + quiz.getQuestionIndex().answer);
    }

    this.questionIndex++;
}

//App Part
//new Question(text, choices, answer);


//Populate questions, check the score, and if answers are correct
//guess: to check if the answers are correct
function populate() {
    if(quiz.isEnded()) {
        //show score when quiz is ended
        showScores();
    } else {
        //show question(s)
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h2>Result</h2>";
    gameOverHtml += "<h3 id='score'> Your scores: " + quiz.score + "/" + quiz.questions.length + "</h3>";
    gameOverHtml += "<a href='quiz-app.html' style='color: black;'>Restart</a>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Which is the coding language that Tyler enjoys the most?", ["Python", "Java", "JavaScript", "CSS"], "Python"),
    new Question("Does Tyler have a girlfriend now?", ["Yes", "No", "Dating with codes", "Does not give a @$#%"], "Dating with codes"),
    new Question("University of California San Diego is most known for?", ["Academic", "Socially dead (jk)", "Medicine/Pre-Med school", "STEM school"], "Academic"),
    new Question("What is Tylers most favorite TV show?", ["Stranger Things", "The Big Bang Theory", "Breaking Bad", "The Flash"], "Breaking Bad"),
    new Question("Which one Tyler prefers?", ["Coding", "Design", "Neither", "Somewhere in between"], "Somewhere in between"),
    new Question("The COGS (Cognitive Science) class that Tyler enjoys the most is?", ["Sensation and Perception", "Introduction to Computing", "Learning, Memory, and Attention", "Interaction Design"], "Learning, Memory, and Attention"),
    new Question("What is Tyler's Hogwarts house?", ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"], "Ravenclaw"),
    new Question("What was Tyler's intended major at the beginning of his first quarter at UCSD?", ["Computer Science", "Human Computer Interaction", "Data Science", "Probability and Statistics"], "Data Science"),
    new Question("Which college is Tyler in now?", ["Warren", "Revelle", "Muir", "Sixth"], "Warren"),
    new Question("Which place that Tyler wants to live in the future?", ["Bay Area", "San Diego", "Vietnam", "Oregon"], "Oregon")
];

//Create object
var quiz = new Quiz(questions);

//Call populate function
populate();