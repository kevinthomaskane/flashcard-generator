
var BasicCard = require("./BasicCard.js")
var ClozeCard = require("./ClozeCard.js")
var inquirer = require("inquirer")

var firstPresident = new BasicCard(
    "Who has scored the most points in an NBA game?", "Wilt Chamberlain");
var firstPresidentCloze = new ClozeCard(
    "...has scored the most points in an NBA game.", "Wilt Chamberlain");

var finalsMVP = new BasicCard(
    "Who has won the most NBA finals MVP awards?", "Michael Jordan");
var finalsMVPCloze = new ClozeCard(
    "...has won the most NBA finals MVP awards.", "Michael Jordan"
)

var billRussell = new BasicCard(
    "Who is the only player to win 2 championships as a player-coach?", "Bill Russell");
var billRussellCloze = new ClozeCard(
    "...is the only player to win 2 championships as a player-coach.", "Bill Russell"
)

var coachingTitles = new BasicCard(
    "Who has won the most NBA coaching titles?", "Phil Jackson");
var coachingTitlesCloze = new ClozeCard(
    "...has won the most NBA coaching titles.", "Phil Jackson"
)

var shortest = new BasicCard(
    "Who is the shortest player of all-time?", "Mugsy Bogues");
var shortestCloze = new ClozeCard(
    "...is the shortest player of all-time.", "Mugsy Bogues"
)

var hornets = new BasicCard(
    "Which team drafted Kobe Bryant?", " Charlotte Hornets");
var hornetsCloze = new ClozeCard(
    "...drafted Kobe Bryant.", "Charlotte Hornets"
)

var ppg = new BasicCard(
    "Which player has the highest career ppg?", "Michael Jordan");
var ppgCloze = new ClozeCard(
    "...has the highest career ppg.", "Michael Jordan"
)

var record = new BasicCard(
    "Which team has the best record in a single season?", "Golden State");
var recordCloze = new ClozeCard(
    "...has the best record in a single season.", "Golden State"
)

var questions = [firstPresident, firstPresidentCloze, finalsMVP, finalsMVPCloze, billRussell, billRussellCloze, coachingTitles, coachingTitlesCloze, shortest, shortestCloze, hornets, hornetsCloze, ppg, ppgCloze, record, recordCloze]

var current;
function chooseQuestion() {
    var indexChoice = Math.floor(Math.random() * 16 + 1)
    current = questions[indexChoice];
    return current[Object.keys(current)[0]]
}


function ask() {
    var choice = chooseQuestion();
    inquirer.prompt([
        {
            type: "input",
            name: "userInput",
            message: choice
        }
    ]).then(function (user) {
        console.log(user.userInput)
        if (user.userInput === current[Object.keys(current)[1]]) {
            console.log("correct")
            ask();
        }
        else {
            console.log("sorry the answer was " + current[Object.keys(current)[1]])
            ask();
        }
    })
}

ask();