console. log("Hello World");
let a = 10;
let b = 5;
console. log("sum is :" ,a+b );
// mahtab alam comment 


//template literals
let pencilPrice = 20;
let erasorPrice = 5;
console. log('The total price is : ${pencilPrice + erasorPrice} Rupees.');


//Arithmetic operator
let x = 2;
let y = 3;
console. log(x+y);
console. log(x-y);
console. log(x*y);
console. log(x/y);
console. log(x%y);
console. log(x ** y); // x ka power y 

//unary operator already pad chuke hai
let r = 4;
console.log(r++); //4
console.log(++r); //6
let q = 3;
q = r;
console. log(r); //4

//comparison operotor
let age = 18;
console. log(age > 18);//false
console. log(age <= 18); //true
let g = 3;
let j = 3;
console. log(g == j);

let h = 4;
console. log(g != h); // not equal to



//else if statement examples
let marks = 70;
if(marks >= 80) {
    console. log("A+")
}
else if(marks >= 60) {
    console.log("A")
}
else if(marks >= 33) {
    console.log("B")
}
else if(marks >= 20) {
    console.log("C")
}



//alert("leave the site!");
//console.log("this is a simple log");
//console.error("this is an error msg");
//console.warn("this is an warning msg");



//prompt("enter your name:");


// Assignment Part 2
let num = 100;
if(num % 10 == 0){
    console.log("good");

}
else
console.log("bad");


//let name = prompt("please enter your name");
//let ages = prompt("please enter your ages");

//alert('${name} is ${age} years old. ');
let msg = "help!";
console.log(msg.trim().toUpperCase());


for(let i = 0; i<=15; i+2);
console.log(i);