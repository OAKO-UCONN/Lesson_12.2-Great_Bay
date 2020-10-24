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
    console.log("Connected as id")
})