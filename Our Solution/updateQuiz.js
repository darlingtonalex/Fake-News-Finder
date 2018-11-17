chosenElement = "11";
answerDisplayed = false;
score = 0;
count = 0;
alreadyViewed = [];


function updatePage() {    
    if (answerDisplayed == true) {
        updateImage();
    }
    else {
        showAnswer();
        updateScoreCount();
    }
}

function updateImage() {
    updateQuestionCount()
    answerDisplayed = false;
    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("option1").style.visibility = "visible";
    document.getElementById("option2").style.visibility = "visible";
    document.getElementById('answer').innerHTML = "";
    if (alreadyViewed.length == 8){
        gameOver();
        return
    }
    while (alreadyViewed.includes(chosenElement)) {
        chosenElement = '' + Math.floor((Math.random() * 2) + 1) + Math.floor((Math.random() * 4) + 1);
    }
    alreadyViewed.push(chosenElement);
    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById('questionImage').src='./images/' + chosenElement + '.png'; 
    document.getElementById('nextButton').innerHTML = "Get Answer";
}
function showAnswer(realOrFake) {
    answerDisplayed = true;
    document.getElementById("option1").style.visibility = "hidden";
    document.getElementById("option2").style.visibility = "hidden";
    document.getElementById("nextButton").style.visibility = "visible";
    
    if (chosenElement[0] == "1") {
        document.getElementById('answer').innerHTML = "This is real news!";
        if (realOrFake == "realNews") {
            updateScore()
        }
    }
    else {
    document.getElementById('answer').innerHTML = "This is fake news!";
    if (realOrFake == "fakeNews") {
        updateScore()
    }
    }
    document.getElementById('nextButton').innerHTML = "Continue";
}
function updateScore() {
    score ++;
    document.getElementById('score').innerHTML = "Score: " + score;
}
function updateQuestionCount() {
    document.getElementById('questionCount').innerHTML = "Question " + (alreadyViewed.length + 1) + "/8";
}
function gameOver(){
    window.location.href = "./endscreen.html";
}