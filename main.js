

var questions = [firstPresident, firstPresidentCloze, finalsMVP, finalsMVPCloze, billRussell, billRussellCloze, coachingTitles, coachingTitlesCloze, shortest, shortestCloze, hornets, hornetsCloze, ppg, ppgCloze, record, recordCloze]
var BasicCard = require("./BasicCard.js")
var ClozeCard = require("./ClozeCard.js")
var inquirer = require("inquirer")
var current

function chooseQuestion(){
    indexChoice = Math.floor(Math.random*16)+1
    current = questions[indexChoice];
    return current
}


inquier.prompt([
    {
        type: "input",
        name: "userInput",
        message: chooseQuestion().current[Object.keys(current)[0]]
      }
]).then(function(userInput){
    console.log(userInput)
})

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard(
   "...was the first president of the United States.",  "George Washington");

var finalsMVP = new BasicCard(
    "Who has won the most NBA finals MVP awards", "Michael Jordan");
var finalsMVPCloze = new ClozeCard(
    "...has won the most NBA finals MVP awards", "Michael Jordan" 
)

var billRussell = new BasicCard(
    "Who is the only player to win 2 championships as a player-coach", "Bill Russell");
var billRussellCloze = new ClozeCard(
     "...is the only player to win 2 championships as a player-coach", "Bill Russell"
)

var coachingTitles = new BasicCard(
    "Who has won the most NBA coaching titles", "Phil Jackson");
var coachingTitlesCloze = new ClozeCard(
    "...has won the most NBA coaching titles", "Phil Jackson"
)

var shortest = new BasicCard(
    "Who is the shortest player of all-time", "Mugsy Bogues");
var shortestCloze = new ClozeCard(
     "...is the shortest player of all-time", "Mugsy Bogues"
)

var hornets = new BasicCard(
    "Which team drafted Kobe Bryant", " Charlotte Hornets");
var hornetsCloze = new ClozeCard(
     "...drafted Kobe Bryant", "Charlotte Hornets"
)

var ppg = new BasicCard(
    "Which player has the highest career ppg", "Michael Jordan");
var ppgCloze = new ClozeCard(
     "...has the highest career ppg", "Michael Jordan"
)

var record = new BasicCard(
    "Which team has the best record in a single season", "Golden State");
var recordCloze = new ClozeCard(
     "...has the best record in a single season", "Golden State"
)