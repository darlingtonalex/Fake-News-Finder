var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var alreadyAnswered = [];

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = 'True';
var opt2 = 'False';

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;
	}
	selectedOption.checked = false;
	var trueOrFalse = Math.floor((Math.random() * 2) + 1);
	var randomQuestion = Math.floor((Math.random() * 10) + 1);
	currentQuestion = './images/' + trueOrFalse + randomQuestion + '.png';
	alreadyAnswered.push(currentQuestion);
	console.log(currentQuestion);
	if(alreadyAnswered.length == 10){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totalQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);