const post = {
    username: "@Alam",
    content: "This is my #firstpost",
    likes: 120,
    reposts: 4,
    tags:["@mahtabalam", "hafsa"]
};


//Nested Objects

//const classInfo = {
  //  Mahtab : {
      //  grade: "A+",
      //  city: "Delhi"
   // },
   // Haffa : {
       // grade: "A",
        //city: "Hyderabad"
   // },
   // Alam : {
     //   grade: "0",
       // city: "Mumbai"
   // },
//}



//Array of objects -- array ke inside objects hai
//const classInfo = [
   //{ 
    //name: "mahtab",
       // grade: "A+",
       // city: "Delhi"
   // },
   // {
       //name: "hafsa", 
//     grade: "A",
       // city: "Hyderabad"
   // },
//      {
      //  name: "alam", 
       // grade: "0",
       // city: "Mumbai"
    //},
       //     ]




       // Guessing Game

       const max = prompt("enter the max number");
       const random = Math.floor(Math.random() * max) +1;
       let guess = prompt("guess the number");
       while(true) {
        if(guess == "quit") {
            console.log("user quit");
            break;
        }
        if(guess == random) {
            console.log("you are right!! random number was", random);
            break;
        }
        else if(guess < random){
            guess = prompt("your guess was to small. please try again");
        }
        else {
            guess = prompt("your guess was to large. please try again");
        }
       }