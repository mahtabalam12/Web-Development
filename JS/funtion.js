/*
function Alam() {
    console.log("hafsa")
}
Alam(); 
*/


//function rollDice() {
   // let rand = Math.floor(Math.random() * 6) + 1;
   // console.log(rand);
//}

//rollDice();
//rollDice();
//rollDice();
//rollDice();



/*function AverageOfNumber(a, b, c) {
    let Average=(a + b + c) /3;
  console.log(Average);
}
AverageOfNumber(2, 4, 6); */

//\function question











/* practice question
let str=["Al", "Haf", "Mah"];
    function concat(str) {

        let result = "";
        for(let i=0; i<str.length; i++){
            result += str[i];
        }
return result;
    } */

// logic
/*let odd = function(n) {
    console.log(!(n%2 == 0));
}
let even = function(n) {
    console.log((n%2 == 0));
} */

/*
//higher function expression
function oddOrEvenFactory(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;

    }
    else if(request == "even"){

        let even = function(n) {
            console.log((n%2 == 0));
        }
        return even;

    }
    else {
        console.log("wrong number");
    }
}
let request = "odd" ;
*/


//Assignment Part 06
/*let arr=[10, 9, 8, 1, 2, 3, 4, 5, 6, 7]; 
    let num = 5;
    function getElements(arr, num) {
        for(let i = 0; i<= arr.length; i++){
            if(arr[i]>num) {
                console.log(arr[i]);
            }
        }
    }
getElements(arr, num);   */

/*
//2
let str = "abcdabcdefgggh";
function getUnique(str) {
    let ans= " ";
    for(let i = 0; i<str.length; i++) {
        let currChar = str[i]; 
        if(ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}
getUnique(str); 
*/



//5
/*

let start= 100;
let end= 200;
function generateRandom(start , end) {

 let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
*/
         

/*




          //  Lecture 8 Array Methods 

          //for Each
          //1
          //let arr = [1, 2, 3, 4, 5];
          //let print = function (el) {
          //  console.log(el);
          //};
          //arr.forEach(print);

///2
         /* let arr = [1, 2, 3, 4, 5];
          arr.forEach(function(el) {
         console.log(el);
          } ); 

          arr.forEach((el) => {
            console.log(el);
          });
          */



///practice 
/* let arr = [
    {
    name: "Alam",
    marks: 90,
},
{
    name: "Alifa",
    marks: 86,
},
{
    name: "wasiqa",
    marks: 95,
},
];
arr.forEach((student) =>{
    console.log(student.marks);
} 
);



*/
/*
//(Map   ---------)  
let num = [1, 2, 3, 4];
let double = num.map((el) =>
{
return el*el;
});


//Filter 
let nums = [1,2,3,4,5,6,7,8,9,0,4,];
let ans = nums.filter((el) => {
    return el % 2 !== 0;
});
*/

//practice question multiple of 10
/*let nums= [10, 20, 30,60,50];
let ans = nums.every((el) => el %10 ==0);
console.log(ans);
*/


/*
//Destructuring Objects
const student = {
    name: "Karan",
    class: 9,
    age: 14,
    subjects: ["hindi", "english", "urdu", "maths", "science"],

username: "karan123",
password: 1234,

};
const {
    username: user, password:pass 
} = student;
console.log(user); //"Karan123"
*/


/*
//Assingment 08
 //   Q1   
 let nums = [1, 2, 3, 4, 5]    ;
 const square = nums.map((num) => num * num)  ;    
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum/ nums.length;
console.log(avg);


//Q2
let numbers = [2,4,6,8,-2,-4];
console.log(numbers.map((number) => number + 5));

//Q3
let strings = ["adam", "eve", "bob", "donald"];
console.log( strings.map((strings) => strings.toUpperCase()));

//Q4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v*2),
];
doubleAndReturnArgs([1,2,3], 4,4);// [1,2,3 ,8,8]
doubleAndReturnArgs([2], 10,4);//[2,20,8]

//Q5
const mergeObjects = (obj1 , obj2) =>({...obj1 , ...obj2});
mergeObjects({a: 1 ,b :2} ,{c: 3 , d: 4});//{a:1,b:2,c:3,d:4}
*/


let str=["Al", "Haf", "Mah"];
    function concat(str) {

        let result = "";
        for(let i=0; i<str.length; i++){
            result += str[i];
        }
return result;
    }