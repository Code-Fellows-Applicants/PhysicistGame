'use strict'

//an empty array which will contain the physicist objects
var physicistArray=[];

//a constructor function which creates all of the physicist objects
    //each object will contain a name and imgPath property
function CreatePhysicist (name, imgPath){
    this.name = name;
    this.imgPath = imgPath;
    physicistArray.push(this);
};

//these are all the physicist being created by instantiating the CreatePhysicist function
var albertEinstein = new CreatePhysicist ('Albert Einstein', 'images/albertEinstein');
var marieCurie = new CreatePhysicist('Marie Curie', 'images/marieCurie.jpg');
var maxPlanck = new CreatePhysicist ('Max Planck', 'images/maxPlanck.jpg');
var neilsBohr = new CreatePhysicist ('Neils Bohr', 'images/neilsBohr.jpg');
var nikolaTesla = new CreatePhysicist('Isaac Newton', 'images/isaacNewton');
var erwinSchrodinger = new CreatePhysicist ('Erwin Schrodinger', 'images/nikolaTesla.jpg');
var stephenHawking = new CreatePhysicist('Stephen Hawking', 'images/stephenHawking');
var wernerHeisenberg = new CreatePhysicist ('Werner Heisenberg','images/wernerHeisenberg.jpg');
var michaelFaraday = new CreatePhysicist ('Michael Faraday', 'images/michaelFaraday.jpg');
var paulDirac = new CreatePhysicist ('Paul Dirac', 'images/paulDirac.jpg');
var jamesMaxwell = new CreatePhysicist('James Maxwell', 'images/jamesMaxwell.jpg');
var juliusOppenheimer = new CreatePhysicist('Julius Oppenheimer', 'images/juliusOppenheimer');

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

//set the initial counter and player score to 0
var playerScore = 0;
var counter = 0;

//adding an event listener to listen for clicks on the submit button
    //target the form and add an even listener to the submit element
var submission = getElementById('question');
submission.addEventListener('submit', clickHandler);

//function that compares the submitted answer to the correct answer
    //increment the score if correct
    //always append the image with the next physicist by incrementing the counter first
function clickHandler(event){
    event.preventDefault();
    var answer = document.getElementById('answer');
    var thePhysicist = document.getElementById(`${physicistArray[counter].name}`);

    if (answer.value === thePhysicist.id){
        playerScore++
    }
    counter++
    showPhysicist();
}

//function to store the score and the counter locally
    //first it stringifys the content of the variables into coins
    //then it stores those coins in local data
function storeDataLocally(){
    var counterStored = JSON.stringify(counter);
    var scoreStored = JSON.stringify(playerScore);

    localStorage.setItem('counter',counterStored);
    localStorage.setItem('playerScore', scoreStored);
}
