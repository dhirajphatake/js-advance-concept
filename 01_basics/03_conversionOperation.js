let score = "33a";

console.log(typeof score); //string
console.log(typeof (score)); //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN


// "33" => 33
// "33abc" => NaN
// true => 1; false=>0
console.log("--------------");

// convert into boolean 
let isLoggedIn = 1;

let boooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(boooleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false; 
// "dhiraj" => true;


// convert into string 
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

