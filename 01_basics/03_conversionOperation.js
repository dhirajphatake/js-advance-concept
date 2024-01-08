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



// Operations 
let value = 3;
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello";
let str2 = " Dhiraj";

let str3 = str1 + str2;
console.log(str3);

console.log("----------------------");

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //string aadhi asel tar bakila pan string madhe convert honar
console.log(1 + 2 + "2"); //string nantar asel tar aadhiche operation honar 


console.log("----------------------");

console.log(true); //true
console.log(+true); //1
console.log(+"");
