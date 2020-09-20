'use strict';

//an empty array which will contain the physicist objects
var physicistArray=[];

//set the initial counter and player score to 0
var playerScore = 0;
var counter = 0;

//we need to persist the game state before anything
persistGameState();

//a constructor function which creates all of the physicist objects
    //each object will contain a name and imgPath property
function CreatePhysicist (name, imgPath){
    this.name = name;
    this.imgPath = imgPath;
    physicistArray.push(this);
};

//these are all the physicist being created by instantiating the CreatePhysicist function
var albertEinstein = new CreatePhysicist ('Albert Einstein', 'images/albertEinstein.jpg');
var marieCurie = new CreatePhysicist('Marie Curie', 'images/marieCurie.jpg');
var maxPlanck = new CreatePhysicist ('Max Planck', 'images/maxPlanck.jpg');
var nielsBohr = new CreatePhysicist ('Niels Bohr', 'images/nielsBohr.jpg');
var isaacNewton = new CreatePhysicist('Isaac Newton', 'images/isaacNewton.jpg');
var nikolaTesla = new CreatePhysicist('Nikola Tesla', 'images/nikolaTesla.jpg');
var erwinSchrodinger = new CreatePhysicist ('Erwin Schrodinger', 'images/erwinSchrodinger.jpg');
var stephenHawking = new CreatePhysicist('Stephen Hawking', 'images/stephenHawking.jpg');
var wernerHeisenberg = new CreatePhysicist ('Werner Heisenberg','images/wernerHeisenberg.jpg');
var michaelFaraday = new CreatePhysicist ('Michael Faraday', 'images/michaelFaraday.jpg');
var paulDirac = new CreatePhysicist ('Paul Dirac', 'images/paulDirac.jpg');
var jamesMaxwell = new CreatePhysicist('James Maxwell', 'images/jamesMaxwell.jpg');
var juliusOppenheimer = new CreatePhysicist('Julius Oppenheimer', 'images/juliusOppenheimer.jpg');

//this function will display the current physicists image on the div for the image
    //it creates an image element and appends the previous div labelled with the id "displayImage"
function showPhysicist(){
    for (let i = 0; i < physicistArray.length ; i++ ) {
        if (counter === i) {
            var thePhysicist = document.getElementById('displayImage');
            var physicistPic = document.createElement('img');
            physicistPic.id = physicistArray[i].name;
            physicistPic.src = physicistArray[i].imgPath;
            thePhysicist.appendChild(physicistPic);
        }
    }
}

//this is the first instance of displaying the physicist once the user loads into the page
showPhysicist();


//function to store the score and the counter locally
    //first it stringifys the content of the variables into coins
    //then it stores those coins in local data
function storeDataLocally(){
    var counterStored = JSON.stringify(counter);
    var scoreStored = JSON.stringify(playerScore);
    
    localStorage.setItem('counter', counterStored);
    localStorage.setItem('playerScore', scoreStored);
}
//a function that clears the display previously on the element labelled with the id "display images" 
//replaces the img element with a blank element tag
function clearContent(){
    var thePhysicist = document.getElementById('displayImage');
    thePhysicist.innerHTML = '';
    var userInput = document.getElementById('answer');
    userInput.value = '';
}
//function to clear all the elements in the div labelled game
//replaces them with the score and the final image
function finalScore() {
    var gameArea = document.getElementById('game');
    var gameInterface = document.getElementById('interface');
    gameInterface.remove();

    var score = document.createElement('p');
    score.textContent = `Your final score is: ${playerScore}`;
    score.id = 'finalScore';
    
    var finalImage = document.createElement('img');
    finalImage.src = '';
    finalImage.id = 'finalImage';
    
    var scoreMessage = document.createElement('p');
    scoreMessage.textContent = '';
    scoreMessage.id = 'scoreMessage';
    
    switch (playerScore) {
        case 0:
            finalImage.src = 'https://cdn.everydaypower.com/wp-content/uploads/2017/04/Quotes-About-Disappointment-in-life.jpg';
            
            scoreMessage.textContent = 'Um, did you even try?';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case 1 :
            finalImage.src = 'https://cdn.everydaypower.com/wp-content/uploads/2017/04/Quotes-About-Disappointment-in-life.jpg';
            scoreMessage.textContent = 'Wow! You really don\'t care about a physics, huh?';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  2 :
            finalImage.src = 'https://cdn.everydaypower.com/wp-content/uploads/2017/04/Quotes-About-Disappointment-in-life.jpg';
            scoreMessage.textContent = 'Wow! You really don\'t care about a physics, huh?';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  3:
            finalImage.src = 'https://www.ocregister.com/wp-content/uploads/migration/nru/nruwt7-feature1176977504.jpg?w=879';
            scoreMessage.textContent = 'Wow! You really don\'t care about a physics, huh?';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case 4 :
            finalImage.src = 'https://www.ocregister.com/wp-content/uploads/migration/nru/nruwt7-feature1176977504.jpg?w=879';
            scoreMessage.textContent = 'Not bad, but not impressive either!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  5 :
            finalImage.src = 'https://www.ocregister.com/wp-content/uploads/migration/nru/nruwt7-feature1176977504.jpg?w=879';
            scoreMessage.textContent = 'Not bad, but not impressive either!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  6 :
            finalImage.src = 'images/paulDirac.jpg';
            scoreMessage.textContent = 'Not bad, but not impressive either!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  7:
            finalImage.src = 'images/paulDirac.jpg';
            scoreMessage.textContent = 'Not bad, but not impressive either!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break; 
        case 8 :
            finalImage.src = 'images/stephenHawking.jpg';
            scoreMessage.textContent = 'Fantastic! You really know your physicists!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  9 :
            finalImage.src = 'images/stephenHawking.jpg';
            scoreMessage.textContent = 'Fantastic! You really know your physicists!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  10 :
            finalImage.src = 'https://i.pinimg.com/originals/55/34/12/553412c68491cd747688b9d12cb39532.jpg';
            scoreMessage.textContent = 'Fantastic! You really know your physicists!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  11 :
            finalImage.src = 'https://i.pinimg.com/originals/55/34/12/553412c68491cd747688b9d12cb39532.jpg';
            scoreMessage.textContent = 'Fantastic! You really know your physicists!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case  12:
            finalImage.src = 'https://i.pinimg.com/originals/55/34/12/553412c68491cd747688b9d12cb39532.jpg';
            scoreMessage.textContent = 'Fantastic! You really know your physicists!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        case 13:
            finalImage.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg';
            scoreMessage.textContent = 'OMG, you\'re a genius!';
            gameArea.appendChild(score);
            gameArea.appendChild(finalImage);
            gameArea.appendChild(scoreMessage);
            break;
        //no default
    }
}


//function to save the counter and score in local storage in order to persist the game
function persistGameState(){
    if(localStorage.getItem('counter')){
        var counterParsed = localStorage.getItem('counter');
        counter = JSON.parse(counterParsed);
    }

    if (localStorage.getItem('score')){
        var scoreParsed = localStorage.getItem('score');
        playerScore = JSON.parse(scoreParsed);
    }
}

//attach an event listener to listen for clicks on the restart button
var reset = document.getElementById('restart');
reset.addEventListener('click', restartGame);
//function to reset the counter and player score when the restart button is clicked 
function restartGame(){
    counter = 0;
    playerScore = 0;
    storeDataLocally();
    location.reload();
}
//adding an event listener to listen for clicks on the submit button
    //target the form and add an even listener to the submit element
var submission = document.getElementById('question');
submission.addEventListener('submit', clickHandler);

//function that compares the submitted answer to the correct answer
    //increment the score if correct
    //always append the image with the next physicist by incrementing the counter first
function clickHandler(event) {
    event.preventDefault();
    var answer = document.getElementById('answer');
    var thePhysicist = document.getElementById(`${physicistArray[counter].name}`);

    if (answer.value === thePhysicist.id){
        playerScore++;
    } else {
        playerScore === playerScore;
    }

    counter++;

    storeDataLocally();

    if(counter === physicistArray.length){
        finalScore();
    }

    if (counter < physicistArray.length){
        clearContent();  
        showPhysicist();
    }
}