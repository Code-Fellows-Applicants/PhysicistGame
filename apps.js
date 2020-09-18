'use strict'

var physicistArray=[];

function CreatePhysicist (name, img){
    this.name = name;
    this.img = img;
    physicistArray.push(this);
};

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

