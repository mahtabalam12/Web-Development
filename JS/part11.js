// data save 
/*
function saveDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() *10) +1;
    if(internetSpeed>4) {
        success();

    }
    else {
        failure();
    }
}
savetoDb (
    "apna college",
    ()=> {
        console.log("succes : your data was saved");

savetoDb (
    "hello world",
    () => {
        console.log("success2: data2 save");

    },
    () => {
        console.log("failure: weak connection");
    }

);
    } ,
    () => {
        console.log("failure: weak connection, data not saved");

    }
     );
     */
/*
     function saveDb(data) {
        return new Promise( (resolve, reject) => { 
    let internetSpeed = Math.floor(Math.random() *10) +1;
    if(internetSpeed>4) {
        resolve("success: data was saved");
    

    }
    else {
        reject("failure: weak connection");
    }
});
}


     savetoDb("apna college")
     .then((result) => { 
        console.log("data1 saved");
        console.log(result);
        return savetoDb("helloworld");
     
     })
     .then ((result) => { 
        console.log("data2 to saved");
        console.log(result);
        return savetoDb("shradha");
     })
     .then((result)=> { 
        console.log("data3 saved");
        console.log(result);
     })
.catch((error) => { 
    console.log("promise was rejected");
    console.log(error);

     });
*/


// part12
/*
//async keyword
async function greet() {
    throw "404 page not found"
    return "hello";
}

greet()
.then((result) => {
console.log("promise was resolved");
console.log("result was : ", result);
})
.catch((err) => {
    console.log("promise was rejected with err : ", err );
});
*/

/*
// await keyword
function getNum() {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10) +1;
            console.log(num);
            resolve();
        }, 1000);
        });
    }
 async function  demo() {
 //   getNum(); 
//getNum(); 
//getNum();
// await lagane se wait krke 1second baad aayegi ek ek krke
 await getNum(); 
  await getNum(); 
 await getNum(); 

 }
*/
/*

let h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log('color changed to ${color}!');
            resolve("color changed!");
        }, delay);

        });
    
}
async function demo(){
    
  //  changeColor("red",1000);
    //changeColor("green",1000);
    //changeColor("black",1000);
    //changeColor("yellow",1000);

 await changeColor("red",1000);
   await changeColor("green",1000);
    await changeColor("black",1000);
   await changeColor("yellow",1000);
} 
    */


let h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5) +1;
            if(num >3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log('color changed to ${color}!');
            resolve("color changed!");
        }, delay);

        });
    
}
async function demo(){
    
try {
 await changeColor("red",1000);
   await changeColor("green",1000);
    await changeColor("black",1000);
   await changeColor("yellow",1000);
} catch(err) {
    console.log("error caught");
    console.log(err);
}
let a = 5;
console.log(a);
console.log("new number = " , a+3)
}
