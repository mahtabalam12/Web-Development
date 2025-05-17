


/*
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    console.log("button was clicked");
    let fact = getFacts();
    console.log(fact);
});




let url = "https://catfact.ninja/fact";


async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e) {
        console.log("error - ", e);
        return "no fact found";
    }
    
}
*/



let url = "htpps://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

 let colArr = await getCollege(country);
   console.log(colArr);
});

function show(colArr) {
    let list = document.querySelector("list");
    list.innerText="";
    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText= col.name;
        list.appendchild(li);
    }
}

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
      console.log("error :", e);
      return [];
    }
}
    