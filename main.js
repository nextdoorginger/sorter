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
  "Friends to lovers",
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
  "Fluff",
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
  "One-sided pining",
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
  "Secret relationship",
  "Exes to lovers",
  "Online dating",
  "Missing scene",
  "Miscommunication",
  "Canon compliant",
  "Canon divergence",
  "Slow burn",
  "Sickfic",
  "Hurt no comfort",
  "Confession of feelings"
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
  "Simon Haynes/Rose Williams",
  "Simon Haynes/Max Richman",
  "Maggie Clarke/Mitch Clarke",
  "Maggie Clarke/Deb",
  "Maggie Clarke/Lumber Jack",
  "Maggie Clarke/Howie",
  "David Clarke/Emily Kang",
  "Mo/Perry Haskins",
  "Mo/Eddie",
  "Mo/Leif Donnelly",
  "Leif Donnelly/Tobin Batra",
  "Leif Donnelly/Max Richman",
  "Leif Donnelly/Autumn",
  "Leif Donnelly/Simon Haynes",
  "Leif Donnelly/McKenzie",
  "Leif Donnelly/Jenna Kang",
  "Leif Donnelly/George",
  "Joan Bennett/Leif Donnelly",
  "Joan Bennett/Ava Price",
  "Tobin Batra/McKenzie",
  "Tobin Batra/Abigail",
  "Tobin Batra/Jenna Kang",
  "Danny Michael Davis/Tony",
  "Tatiana Morris/Rose Williams",
  "Rose Williams/Leif Donnelly"
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
  "Disappointing",
  "Disaster"
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


function clickEventDefault(){
  if (CharacterStatus == 1) {
    setRandomCharacter();
  }

  if (LocationStatus == 1) {
    setRandomLocation();
  }

  if (TropeStatus == 1) {
    setRandomTrope();
  }

  if (AdjectiveStatus == 1) {
    setRandomAdjective();
  }
  
  // setRandomTrope();
  //setRandomCharacter();
  //setRandomAdjective();
}


function lock(){
  document.getElementById("image").innerHTML = '<img src="images/locked.png" width="30" onclick="unlock()">';
  CharacterStatus = 0;
}

function unlock() {
    document.getElementById("image").innerHTML = '<img src="images/unlocked.png" width="30" onclick="lock()">';
    CharacterStatus = 1;
}

function lock1(){
  document.getElementById("image1").innerHTML = '<img src="images/locked1.png" width="30" onclick="unlock1()">';
  LocationStatus = 0;
}

function unlock1() {
    document.getElementById("image1").innerHTML = '<img src="images/unlocked1.png" width="30" onclick="lock1()">';
    LocationStatus = 1;
    checkStatus();
}
function lock2(){
  document.getElementById("image2").innerHTML = '<img src="images/locked2.png" width="30" onclick="unlock2()">';
  TropeStatus = 0;
  checkStatus();
}

function unlock2() {
    document.getElementById("image2").innerHTML = '<img src="images/unlocked2.png" width="30" onclick="lock2()">';
    TropeStatus = 1;
    checkStatus();
}
function lock3(){
  document.getElementById("image3").innerHTML = '<img src="images/locked3.png" width="30" onclick="unlock3()">';
  AdjectiveStatus = 0;
  checkStatus();
}

function unlock3() {
    document.getElementById("image3").innerHTML = '<img src="images/unlocked3.png" width="30" onclick="lock3()">';
    AdjectiveStatus = 1;
    checkStatus();
}
