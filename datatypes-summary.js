// primitive (call by value)
// ****javascript is dynmically ty

// 7 types : string, number, boolean, null, undefined, 
// symbol(to build unique value), bigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 1246536423657653743752366n



// non-premitive(reference type)
// types : Array, objects, funtions

//array
const heros =["shaktiamn", "naagarj", "dooga"]

// object
let myObj = {
    name:"Manpreet",
    age: 23,
}

// function
const myFunction = function()
{
    console.log("Hello world");
}

