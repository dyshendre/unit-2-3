// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let get=localStorage.getItem("amount");
let wallet=document.getElementById("wallet");
wallet.innerText=get;

let data=JSON.parse(localStorage.getItem("movie"))||[];
appendData(data);
function appendData(data){
    let container=document.getElementById("movie");
    container.innerHTML=null;
    data.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","movie_tab");

        let img=document.createElement("img");
        img.src=el.Poster;

        let h3=document.createElement("h3");
        h3.innerText=el.Title;

        div.append(img,h3);
        container.append(div);
    })
}

function submit(){
  
       let name=document.getElementById("user_name").value;
       document.getElementById("user_name").value=null;
       let numOfSeats=document.getElementById("number_of_seats").value;
       document.getElementById("number_of_seats").value=null;
    
   let total_cost=numOfSeats*100;
   if(total_cost<=get)
   {
    alert("Booking successful!");
    get=get-total_cost;
    wallet.innerText=get;
    localStorage.setItem("amount",get);
   }
    else{
        alert("Insufficient Balance!");
    }
}