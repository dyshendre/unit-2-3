//import export
// import {navBar} from "../scripts/navbar.js"
import navBar from "../scripts/navbar.js"
// import {users as item,admins} from "../scripts/db.js" // rename the users as item
// console.log(admins)
// console.log(item)
console.log(navBar)
document.getElementById("navbar").innerHTML = navBar();


window.addEventListener("load", () => {
    getData();

});
// GETING DATA // GET REQUEST FROM THE BACKEND
let getData = async () => {
    let res = await fetch("https://sheltered-tundra-20095.herokuapp.com/api/menu");
    let data = await res.json();
    console.log(data);
    renderDom(data)

}


let renderDom = (data)=>{
    //title
    //status
    //id
    //toggle button
    //remove button
    let container  = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(({title,id,price,image})=>{
        let div = document.createElement("div");
        div.setAttribute("class","box")

        let div1 = document.createElement("div");
        div.setAttribute("class","box1")
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let img = document.createElement("img")
        img.src=image;
        let img_div = document.createElement("div")
        img_div.setAttribute("class","img_div")
        img_div.append(img)
        let remove_btn = document.createElement("button");
        remove_btn.onclick = ()=>{
            deleteTodo(id)
        }
        h3.innerText = title;
        p.innerText = price;
      
        remove_btn.innerText = "Remove";
        div.append(h3,img_div,p,remove_btn)
        div1.append(div)
        container.append(div1)

    })
}

let deleteTodo = async (id)=>{
    
    let res = await fetch(`https://sheltered-tundra-20095.herokuapp.com/api/menu/${id}`,{
        method:"DELETE",
       
        headers: {
            "Content-Type":"application/json"
        },

    })

    getData();

    res = await res.json();
    console.log(res)

}