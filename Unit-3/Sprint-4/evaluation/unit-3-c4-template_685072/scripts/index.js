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
        console.log(event.target.value);
        input=input.value;
        localStorage.setItem("searchData",input);
        window.location.href="search.html" 
    }
});

let india=document.getElementById("in");
cSearch(india.id);

india.addEventListener("click",function(){
    cSearch(this.id)});

let china=document.getElementById("ch");
china.addEventListener("click",function(){
    cSearch(this.id)});

let usa=document.getElementById("us");
usa.addEventListener("click",function(){
    cSearch(this.id)});

let uk=document.getElementById("uk");
uk.addEventListener("click",function(){
    cSearch(this.id)});

let nz=document.getElementById("nz");
nz.addEventListener("click",function(){
    cSearch(this.id)});

async function cSearch(id){
    let response=await fetch(`https://masai-api.herokuapp.com/news/top-headlines?country=${id}`)
    let data=await response.json();
    let actual_data=data.articles;
    console.log('response',actual_data);
    
    appendData(actual_data); 
}

 