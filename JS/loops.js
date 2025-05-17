//for(let i=2; i<=10; i=i+2) {
    //console.log(i);
//}
//for(let i=10; i>=2; i=i-2) {
    //console.log(i);
//}


//table  
//let n = prompt("write your number");
//n = parseInt(n);
//for(let i=n; i<=n*10; i=i+n) {
 //   console.log(i);
//}




const  favourite = "avatar";
let guess = prompt("guess my favourite movie");

while( (guess != favourite) && (guess != "quit") ) {
    console.log("wrong");
    guess = prompt("try again");
}
if(guess == favourite) {
    console.log("congrats!");
}
else {
    console.log("you quit");
}