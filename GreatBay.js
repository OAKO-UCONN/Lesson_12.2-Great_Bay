//ES6 imports
/*
import mysql from 'mysql';
import inquirer from 'inquirer';
*/

//Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer')

//Create the connection on localhost
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"T)UW%#T_$()qwr-a)jsrtg0-",
    database:"greatbay_db"
})

//Create the connection on Heroku. (Coming soon.)
/*
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"T)UW%#T_$()qwr-a)jsrtg0-"
    database:"greatbay_db"
})
*/

//Console log the connection
connection.connect(function(err){
    console.log("Connected as id"+connection.threadId);
})

//Start
var start = function(){
    inquirer.prompt({
        name:"postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices:["POST","BID"]
    }).then(function(answer){
        if(answer.postOrBid.toUpperCase()=="POST"{
            postAuction();
        } else {
            //bidAuction();
        }
    })
}

//POST Auction Function
var postAuction = function(){
    inquirer.prompt([{
        name:"item",
        type:"input",
        message:"What is the item you wish to submit?"
    },{
        name:"category",
        type:"input",
        message:"What category would you like to place it in?"
    },{
        name:"startingBid",
        type:"input",
        message:"What would you like the starting bid to be?"
        validate: function(value){
            if(isNan(value)==false){
                return true;
            } else {
                return false;
            }
        }
    }]).then(function(answer){
        
    })
}