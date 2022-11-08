// Ude Import export (MANDATORY)

console.log("yes");
import navbar from "../components/navbar.js";
console.log(navbar());
document.getElementById("navbar").innerHTML=navbar();

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

let newsData=JSON.parse(localStorage.getItem("newsData"));
console.log("DataData: ",newsData);


display(newsData);

function display(newsData){
    
    let container2=document.querySelector("#detailed_news");
    container2.innerHTML=null;

        let pic=document.createElement("img");
        pic.src=newsData[0].image;
       
        let h2=document.createElement("h2");
        h2.innerText=newsData[0].title;

        let p3=document.createElement("p");
        p3.innerText=newsData[0].content;
        
        container2.append(pic,h2,p3);
        console.log(container2);  
}
