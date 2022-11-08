// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
console.log("yes");
import navbar from "../components/navbar.js";
console.log(navbar());
document.getElementById("navbar").innerHTML=navbar();

import {appendData} from "../scripts/fetch.js"

let input=document.getElementById("search_input");
input.addEventListener("keyup",function(e){
    if(e.keyCode===13)
    {
        // console.log(event.target.value);
        input=input.value;
        localStorage.setItem("searchData",input);
        window.location.href="search.html" 
    }
});

searchN();
async function searchN(){
    let input=localStorage.getItem("searchData");
    
    let response=await fetch(`https://masai-api.herokuapp.com/news?q=${input}`)
    
    let data=await response.json();
    console.log('data',data.articles);

    let actual_data=data.articles;
    appendData(actual_data);
  }