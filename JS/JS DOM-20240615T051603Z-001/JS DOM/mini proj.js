/* Event Bubbling

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click" , function (){
    console.log("div was clicked");
});

ul.addEventListener("click" , function (event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis) {
li.addEventListener("click" , function (event){
    event.stopPropagation();
    console.log("li was clicked");
});
}
*/


//Todo App
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
// access kiye

btn.addEventListener("click" , function (){
    //console.log(inp.value);
    let item = document.createElement("li")
    //list under koi item aad kr do
item.innerText = inp.value;

//delete button batano
let delBtn = document.createElement("button");
delBtn.innerText = "delete";
delBtn.classList.add("delete");

item.appendChild(delBtn);
ul.appendChild(item);
  inp.value = "";  
});

ul.addEventListener("click", function(event){
    //console.dir(event.target); //kon tha target iska button ya aur koi ye batayega
    console.dir(event.target.nodeName); // kis chij ne triggered kiya (button, para, heading)
if(event.target.nodeName == "BUTTON") {

    let listItem = event.target.parentElement;
    listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
} 
});


//else {
  //  console.log("don't delete")
//}



    //console.log("button was clicked");








//jaise delete button pe click kre item delete ho jaye
//let delBtns = document.querySelectorAll(".delete");
//for (delBtn of delBtns) { //loop chalo hr ek item liye delete
//delBtn.addEventListener("click", function () {
    //navigation use krenge delete krne ke liye
   // let par = this.parentElement;
   // console.log(par);
   // par.remove();
//});
//}
//isse only html ka item delete hoga ,, agr sbko delete krna ho to event delegation ka use krenge .