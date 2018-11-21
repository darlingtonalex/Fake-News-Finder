chosenElement = "11";
answerDisplayed = false;
score = 0;
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
    document.getElementById('questionImage').style.visibility = "hidden";
    if (alreadyViewed.length == 8){
        gameOver();
        return
    }
    while (alreadyViewed.includes(chosenElement)) {
        chosenElement = '' + Math.floor((Math.random() * 2) + 1) + Math.floor((Math.random() * 4) + 1);
    }
    alreadyViewed.push(chosenElement);
    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById('questionImage').src='./images/' + chosenElement + '.jpg'; 
    document.getElementById('nextButton').innerHTML = "Get Answer";


    answerDisplayed = false;
    document.getElementById("nextButton").style.visibility = "hidden";
    document.getElementById("option1").style.visibility = "visible";
    document.getElementById("option2").style.visibility = "visible";
    document.getElementById('answer').innerHTML = "";    
    updateQuestionCount();
    document.getElementById('questionImage').style.visibility = "visible";

}
function showAnswer(realOrFake) {
    answerDisplayed = true;
    document.getElementById("option1").style.visibility = "hidden";
    document.getElementById("option2").style.visibility = "hidden";
    document.getElementById("nextButton").style.visibility = "visible";
    
    if (chosenElement[0] == "1") {
        
        if (realOrFake == "realNews") {
            updateScore()
            document.getElementById('answer').innerHTML = "CORRECT - ";
        }
        else {
            document.getElementById('answer').innerHTML = "INCORRECT - ";
        }
        document.getElementById('answer').innerHTML += "This is real news!";
    }
    else {
    
        if (realOrFake == "fakeNews") {
            updateScore()
            document.getElementById('answer').innerHTML = "CORRECT - ";
        }
        else {
            document.getElementById('answer').innerHTML = "INCORRECT - ";
        }
        document.getElementById('answer').innerHTML += "This is fake news!";
    }
    document.getElementById('nextButton').innerHTML = "Continue";
}
function updateScore() {
    score ++;
    document.getElementById('score').innerHTML = "Score: " + score;
}
function updateQuestionCount() {
    if ((alreadyViewed.length) <= 8) {
        document.getElementById('questionCount').innerHTML = "Question " + (alreadyViewed.length) + "/8";
    }
}
function gameOver(){
    localStorage.setItem("endScreenScore", score);
    window.location.href = "./endscreen.html";
}