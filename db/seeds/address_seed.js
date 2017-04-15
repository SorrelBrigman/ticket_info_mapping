'use strict'

console.log("well, hello there");

const { knex } = require('../database');
const addresses = require('../../json/output.json');







// const addressPromises = addresses.map(
//   ({['Address 1'], ['Address 2'], ['Address 3'], City, ['State/Province'], ['Post Code'], Country}) => {

//     let address1 = "Address 1";
//     let address2 = "Address 2";
//     let address3 = "Address 3";
//     let stateProv = "State/Province";
//     let code = "Post Code";

//     console.log("in here!!!")
//   //return knex('addresses').insert({street: address1, city: City, state: stateProv, zip: code, country: Country});
// });

const addressPromises = addresses.map((obj) => {
  let newObj = {};
  newObj.street = obj['Address 1'] + obj['Address 2'] + obj['Address 3'];
  newObj.city = obj.City;
  newObj.state = obj['State/Province'];
  newObj.zip = obj['Post Code'];
  newObj.country = obj.Country;
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
