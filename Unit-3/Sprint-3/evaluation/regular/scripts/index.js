let isLogin = JSON.parse(localStorage.getItem("login"));
console.log('isLogin :>> ', isLogin);
if (!isLogin) {
    localStorage.setItem("login", "false");
}

/*Checkout Button*/
document.getElementById("checkout").addEventListener("click", checkoutBtn);

function checkoutBtn(event) {
    event.preventDefault()
    if (!isLogin) {
        window.location.href = "login.html"
    } else {
        window.location.href = "checkout.html";
    }
}

/*Logout Button*/
document.getElementById("logout").addEventListener("click", logout);
function logout() {
    localStorage.setItem("login","false");
    window.location.reload();
}


let data=[];
let form=document.querySelector("form");
form.addEventListener("submit",(event) => getData(event));
let hotels;

/*Fetch data from API*/
function getData(event){
    event.preventDefault();
    
    let query=document.getElementById("query").value;

    let url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`

   fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
       hotels=res.hotels;

       console.log("data:",hotels);
      
       join(hotels);
    })
    .catch(function(err){
        console.log(err);
    })
}

/*Append Data*/
function join(hotels)
{
    let container=document.getElementById("hotels_list");
    container.innerHTML=null;

    hotels.forEach(function(el){
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

    let book=document.createElement("button");
    div.setAttribute("class","book");
    book.innerText="Book";
    book.addEventListener("click",function(){
        if (!isLogin) {
            alert("Log In to continue!")
            window.location.href = "login.html"
            } 
       else
       {
            data.push(el);

            localStorage.setItem("bookData",JSON.stringify(data));   

            window.location.href = "checkout.html"
       }
       
    })
    
    div.append(h3,pic1,pic2,p1,p2,p3,p4,book);
    container.append(div);
})
}

/*Sort according to price*/
function sort()
{
    let V=document.getElementById("sort_price").value;
   if(V=="LtoH")
    {
        hotels.sort(function(a,b){return a.Price-b.Price});
        join(hotels);
    }
    else
    {
        hotels.sort(function(a,b){return b.Price-a.Price});
        join(hotels);
    }  
}

/*Filter according to AC or Non-AC*/
function filter() {
    let sort_ac=document.getElementById("sort_ac").value;

    let filteredHotels = hotels.filter((el)=>{
        return (el.Ac ? "true" : "false")==(sort_ac);
    });
    console.log(filteredHotels)
    join(filteredHotels);
}
