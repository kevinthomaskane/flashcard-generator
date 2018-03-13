


var BasicCard = require("./BasicCard.js")
var ClozeCard = require("./ClozeCard.js")
var inquirer = require("inquirer")

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard(
    "George Washington", "...was the first president of the United States.");

var finalsMVP = new BasicCard(
    "Who has won the most NBA finals MVP awards", "Michael Jordan");
var finalsMVPCloze = new ClozeCard(
    "Michael Jordan", "...has won the most NBA finals MVP awards"
)

var billRussell = new BasicCard(
    "Who is the only player to win 2 championships as a player-coach", "Bill Russell");
var billRussellCloze = new ClozeCard(
    "Bill Russell", "...is the only player to win 2 championships as a player-coach"
)

var coachingTitles = new BasicCard(
    "Who has won the most NBA coaching titles", "Phil Jackson");
var coachingTitlesCloze = new ClozeCard(
    "Phil Jackson", "...has won the most NBA coaching titles"
)

var shortest = new BasicCard(
    "Who is the shortest player of all-time", "Mugsy Bogues");
var shortestCloze = new ClozeCard(
    "Mugsy Bogues", "...is the shortest player of all-time"
)

var hornets = new BasicCard(
    "Which team drafted Kobe Bryant", " Charlotte Hornets");
var hornetsCloze = new ClozeCard(
    "Charlotte Hornets", "...drafted Kobe Bryant"
)

var ppg = new BasicCard(
    "Which player has the highest career ppg", "Michael Jordan");
var ppgCloze = new ClozeCard(
    "Michael Jordan", "...has the highest career ppg"
)

var record = new BasicCard(
    "Which team has the best record in a single season", "Golden State");
var recordCloze = new ClozeCard(
    "Golden State", "...has the best record in a single season"
)