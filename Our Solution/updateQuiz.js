chosenElement = "11";
answerDisplayed = false;

function updatePage() {    
    if (answerDisplayed == true) {
        updateImage();
    }
    else {
        showAnswer();
    }
}


function updateImage() {
    answerDisplayed = false;
    document.getElementById('answer').innerHTML = "";
    chosenElement = '' + Math.floor((Math.random() * 2) + 1) + Math.floor((Math.random() * 4) + 1);
    document.getElementById('questionImage').src='./images/' + chosenElement + '.png';
    
}
function showAnswer() {
    answerDisplayed = true;
    if (chosenElement[0] == "1") {
        document.getElementById('answer').innerHTML = "This is real news!";
    }
    else {
    document.getElementById('answer').innerHTML = "This is fake news!";
    }
}