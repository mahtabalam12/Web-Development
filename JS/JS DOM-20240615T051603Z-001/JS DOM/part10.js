/*let btns = document.querySelectorAll("button");*/


/*onclick
onmousenter

*/
/*
for (btn of btns) { // har singal button pe ja kar
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
     console.log("you entered a button");
    };
    console.dir(btn);
}

function sayHello() {
    alert("Hello");
}
*/
/*

//Event listener

for (btn of btns) {
    btn.addEventListener("click", sayHello );
    btn.addEventListener("click", sayName );
    
}
    function sayHello() {
    alert("Hello");
}
function sayName() {
    alert("Apna college");
}

*/


/*
//Activity
let btn = document.querySelector("button");


btn.addEventListener("click",function() {
let h3 = document.querySelector("h3");
let randomColor = getRandomColor();
h3.innerText = randomColor;

let div = document.querySelector("div");
div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
let color = 'rgb(${red}, ${green}, ${blue})';
return color;
}







let p = document.querySelector("p");

p.addEventListener("click", function() {
console.log("para was clicked");
});


let box = document.querySelector("box");
box.addEventListener("mouseenter", function(){
    console.log("mouse inside box");
});
*/
/*
 this event
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
});

*/
/*
let btn = document.querySelector("button");
btn.addEventListener("click", function(event){
    console.log(event);
    console.log("button checked");
});

let int = document.querySelector("input");
InputDeviceInfo.addEventListener("keydown",function(){
    console.log("key was pressed");
});

*/


/*
let btns = document.querySelectorAll("button");
console.dir(btn);

btns.onclick = function () {
    alert("button was clicked");
};

*/

let inp= document.querySelector("#text");
   let p = document.querySelector("p");
inp.addEventListener("input",function () {
    console.log(inp.value);
    p.innerText = inp.value;
});