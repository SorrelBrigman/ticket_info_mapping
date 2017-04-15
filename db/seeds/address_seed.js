'use strict'

console.log("well, hello there");

const { knex } = require('../database');
const addresses = require('../../json/output.json');



//TO DO
  //create user form where user is able to put in the current file path
    //user presses button that loads Xl file into json
  //create user form where user can input what names the current spread has for the values in the database
  //after user input, have a button that runs the insert
  //make the user experience and design as logical and simple as possible

  //have the system look at values in table and suggest mapping values
    //auto fill the suggested mappings
    //ask for user confirmation
    //if not correct, allow user to enter the correct value
      //store user input as other optional mapping values to look at for future uses
    //after confirmation (and possible user update) insert data


  //phase 2
  //duplicate system for the other tables in the sweep-o-matic system.

  //phase 3
  //have all systems customizable (any value to any value)



    let address1 = "Address 1";
    let address2 = "Address 2";
    let address3 = "Address 3";
    let city = "City"
    let stateProv = "State/Province";
    let code = "Post Code";
    let country = "Country"



const addressPromises = addresses.map((obj) => {
  let newObj = {};
  newObj.street = obj[address1] + obj[address2] + obj[address3];
  newObj.city = obj[city];
  newObj.state = obj[stateProv];
  newObj.zip = obj[code];
  newObj.country = obj[country];
  // return newObj;
  return knex('addresses').insert(newObj);



});

// console.log(addressPromises);
//   ({['Address 1'], ['Address 2'], ['Address 3'], City, ['State/Province'], ['Post Code'], Country}) => {

//     let address1 = "Address 1";
//     let address2 = "Address 2";
//     let address3 = "Address 3";
//     let stateProv = "State/Province";
//     let code = "Post Code";

//     console.log("in here!!!")
//   //return knex('addresses').insert({street: address1, city: City, state: stateProv, zip: code, country: Country});
// });

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(addressPromises);
    })
    .catch((err)=> console.log(err));
};



// map, so in looking at sizes, the deconstructed in the map is the values in the json, and the keys in the insert are the values we want to map them to)
