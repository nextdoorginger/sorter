const locations = [
  "MaxiMo",
  "SPRQ Point - fourth floor",
  "Clarke home",
  "Zoey's apartment",
  "Zoey's childhood bedroom",
  "Mo's apartment",
  "The Golden Gate Grind",
  "O'Reilly's Tavern",
  "Karaoke bar",
  "SPRQ Point - sixth floor",
  "SPRQ Point lobby",
  "Danny Michael Davis' office",
  "Rooftop garden",
  "Conference room",
  "Golden Gate Bridge",
  "Museum",
  "Simon's apartment",
  "Bay to Breakers race",
  "Casino",
  "The club",
  "Aiden's garage",
  "Bench by the water",
  "Hotel",
  "Farmer's market",
  "Alley",
  "Kitchen",
  "Concert",
  "Maggie's greenhouse",
  "Wedding",
  "Bookstore",
  "Zoo",
  "Garden",
  "Café",
  "Cabin",
  "Circus",
  "Cruise ship",
  "Beach",
  "Hospital",
  "Bakery",
  "Aquarium",
  "Train",
  "Airplane"
  ];

const tropes = [
  "Fake dating",
  "Best friends to lovers",
  "Enemies to lovers",
  "Trapped in an elevator",
  "Kidfic",
  "Medieval AU",
  "Soulmate AU",
  "College AU",
  "Friends with benefits",
  "Coffee shop AU",
  "Major character death",
  "Angst with a happy ending",
  "Angst",
  "Hurt/comfort",
  "Found family",
  "5+1 things",
  "There was only one bed",
  "First kiss",
  "Rivals to lovers",
  "First \"I love you\"",
  "Star-crossed lovers",
  "Accidental marriage",
  "Forbidden romance",
  "Fix-it",
  "Childhood friends to lovers",
  "Enemies to friends to lovers",
  "Strangers to lovers",
  "Mutual pining",
  "Idiots in love",
  "Unrequited love",
  "Vegas fic",
  "Proposal",
  "Marriage",
  "Meet cute",
  "Tooth-rotting fluff",
  "Domestic fluff",
  "Movie night",
  "Camping",
  "Marriage of convenience",
  "Babysitting",
  "Jealousy",
  "Drunk dialing",
  "Neighbors",
  "Road trip",
  "Blind date",
  "Established relationship",
  "Long-distance relationship",
  "Hate at first sight",
  "Secret relationship"
  ];

const characters = [
  "Zoey Clarke/Max Richman",
  "Zoey Clarke/Simon Haynes",
  "Zoey Clarke/Leif Donnelly",
  "Zoey Clarke/Autumn",
  "Zoey Clarke/Tobin Batra",
  "Zoey Clarke/McKenzie",
  "Zoey Clarke/Joan Bennett",
  "Max Richman/Rose Williams",
  "Max Richman/Autumn",
  "Simon Haynes/Jessica Hamilton",
  "Simon Haynes/Tatiana Morris",
  "Maggie Clarke/Mitch Clarke",
  "David Clarke/Emily Kang",
  "Mo/Perry Haskins",
  "Mo/Eddie",
  "Leif Donnelly/Tobin Batra",
  "Leif Donnelly/Max Richman",
  "Leif Donnelly/Autumn",
  "Leif Donnelly/Simon Haynes",
  "Leif Donnelly/McKenzie",
  "Joan Bennett/Leif Donnelly",
  "Joan Bennett/Ava Price",
  "Tobin Batra/McKenzie",
  "Tobin Batra/Abigail",
  "Maggie Clarke/Deb",
  "Danny Michael Davis/Tony",
  "Tatiana Morris/Rose Williams",
  "Rose Williams/Leif Donnelly",
  "Leif Donnelly/Jenna Kang",
  "Tobin Batra/Jenna Kang",
  "Leif Donnelly/George",
  "Simon Haynes/Rose Williams",
  "Maggie Clarke/Lumber Jack",
  "Mo/Leif Donnelly"
  ];

const adjectives = [
  "Spontaneous",
  "Emotional",
  "Heartwarming",
  "Anxious",
  "Flirtatious",
  "Cold",
  "Warm",
  "Snarky",
  "Cheerful",
  "Happy",
  "Nostalgic",
  "Regretful",
  "Secretive",
  "Unexpected",
  "Coincidental",
  "Surprising",
  "Silent",
  "Loud",
  "Melancholy",
  "Confident",
  "Excited",
  "Nervous",
  "Sudden",
  "Confusing",
  "Angry",
  "Easy",
  "Difficult",
  "Annoying",
  "Insufferable",
  "Dizzy",
  "Intoxicated",
  "Smart",
  "Longing",
  "Sleepy",
  "Special",
  "Impossible",
  "Funny",
  "Mysterious",
  "Oblivious",
  "Familiar",
  "Unfamiliar",
  "Hesitant",
  "Gentle",
  "Disappointing"
  ];

var LocationStatus = 1;

var TropeStatus = 1;

var CharacterStatus = 1;

var AdjectiveStatus = 1;

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomFic = () => 
  `${locations[getRandomNumber(locations.length)]} ${tropes[getRandomNumber(tropes.length)]}`;
  
const getRandomLocation = () => 
  `${locations[getRandomNumber(locations.length)]}`;
  
const getRandomTrope = () => 
  `${tropes[getRandomNumber(tropes.length)]}`;
  
const getRandomCharacter = () => 
  `${characters[getRandomNumber(characters.length)]}`;
  
const getRandomAdjective = () => 
  `${adjectives[getRandomNumber(adjectives.length)]}`;

const setRandomLocation = () => {
  document.getElementById('random-fic').innerText = getRandomLocation();
}

const setRandomTrope = () => {
  document.getElementById('random-trope').innerText = getRandomTrope();
}

const setRandomCharacter = () => {
  document.getElementById('random-character').innerText = getRandomCharacter();
}

const setRandomAdjective = () => {
  document.getElementById('random-adjective').innerText = getRandomAdjective();
}

//**********************************************


//**********************************************

function charValue1 (){
  CharacterStatus = 0;
}

function charValue2 (){
  CharacterStatus = 1;
}

function clickEventDefault(){
  setRandomLocation();
  setRandomTrope();
  setRandomCharacter();
  setRandomAdjective();
}

function clickEventNoS() {
  setRandomTrope();
  setRandomLocation();
  setRandomAdjective();
}

function checkStatus() {
  if (CharacterStatus = 0) {
    document.getElementById("thefunction").innerHTML = '<button class="generator" onclick="clickEventNoS()"><b>Generate your Fic!</b></button>';
  }
}


function lock(){
  document.getElementById("image").innerHTML = '<img src="images/locked.png" width="30" onclick="unlock()">';
  document.getElementById("thefunction").innerHTML = '<button class="generator" onclick="clickEventNoS()"><b>Generate your Fic!</b></button>';
  charValue1();
  checkStatus();
  console.log(CharacterStatus);
}

function unlock() {
    document.getElementById("image").innerHTML = '<img src="images/unlocked.png" width="30" onclick="lock()">';
    document.getElementById("thefunction").innerHTML = '<button class="generator" onclick="clickEventDefault()"><b>Generate your Fic!</b></button>';
    charValue2();
    checkStatus();
    console.log(CharacterStatus);
}

function lock1(){
  document.getElementById("image1").innerHTML = '<img src="images/locked1.png" width="30" onclick="unlock1()">';
  locationStatus = 0;
}

function unlock1() {
    document.getElementById("image1").innerHTML = '<img src="images/unlocked1.png" width="30" onclick="lock1()">';
    locationStatus = 1;
    checkStatus();
}
function lock2(){
  document.getElementById("image2").innerHTML = '<img src="images/locked2.png" width="30" onclick="unlock2()">';
  tropeStatus = 0;
  checkStatus();
}

function unlock2() {
    document.getElementById("image2").innerHTML = '<img src="images/unlocked2.png" width="30" onclick="lock2()">';
    tropeStatus = 1;
    checkStatus();
}
function lock3(){
  document.getElementById("image3").innerHTML = '<img src="images/locked3.png" width="30" onclick="unlock3()">';
  locationStatus = 0;
  checkStatus();
}

function unlock3() {
    document.getElementById("image3").innerHTML = '<img src="images/unlocked3.png" width="30" onclick="lock3()">';
    locationStatus = 1;
    checkStatus();
}

{/* //
// function myFunction() {
//  document.getElementById("demo").innerHTML = "Hello World";
//}
// */
}
