// data types are divided into two parst as primitive and non premitive
// diff is based on how they ase stored and how we access them

// js is dynamically typed language i.e no need to define the type of value .it changes as per value

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
   age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3