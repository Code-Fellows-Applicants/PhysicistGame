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