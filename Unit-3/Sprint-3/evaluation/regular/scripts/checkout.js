
let data=JSON.parse(localStorage.getItem("bookData"))||[];

join(data);
function join(data)
{
    let container=document.getElementById("hotel_details");
    container.innerHTML=null;

    data.forEach(function(el,index){
    let div=document.createElement("div");
    div.setAttribute("class","hotel");

    let h3=document.createElement("h3");
    h3.innerText="Title: "+el.Title;

    let pic1=document.createElement('img');
    pic1.src=el.Images.one;

    let pic2=document.createElement('img');
    pic2.src=el.Images.two;

    let p1=document.createElement("p");
    p1.innerText="Number of rooms: "+el.Rooms;

    let p2=document.createElement("p");
    p2.innerText="Price: "+el.Price;

    let p3=document.createElement("p");
    p3.innerText="Rating: "+el.Rating;

    let p4=document.createElement("p");
    p4.innerText="AC: "+el.Ac;

    let remove=document.createElement("button");
        remove.innerText="Remove";

        remove.addEventListener("click",function(){
            deleteBox(index);
            window.location.href="index.html";
        })

    div.append(h3,pic1,pic2,p1,p2,p3,p4,remove);
    container.append(div);
})
}

function deleteBox(index){
    data.splice(index,1);
    localStorage.setItem("bookData",JSON.stringify(data));
    join(data);
 }

// let form=document.querySelector("form");
// form.addEventListener("submit",login)


function submit(){
    let data={
        name:document.getElementById("user_name").value,
        number:document.getElementById("user_number").value,
        address:document.getElementById("user_address").value,
    }

    setTimeout(function(){
        alert(`Mr. ${data.name}, Your booking is successful!`)
    },5000)
}