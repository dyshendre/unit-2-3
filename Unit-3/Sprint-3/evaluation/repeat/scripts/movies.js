// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let get=localStorage.getItem("amount");
let wallet=document.getElementById("wallet");
wallet.innerText=get;

let api="731343a7";
async function main(){
    // try{
        let query=document.getElementById("search").value;
        setTimeout(function(){
            document.getElementById("search").value=null;
        },3000)
       
        let res=await fetch(`https://www.omdbapi.com/?apikey=${api}&s=${query}`);
        let data=await res.json();
        console.log("data:",data.Search);
        appendData(data.Search);
    // }
    // catch(err){
    //     console.log("err:",err);
    // }
    
}
let id;
function debounce(func,delay){
    if(id)
    {
        console.log("id:",id);
        clearTimeout(id);
    }

    id=setTimeout(function(){
        console.log("id2:",id);
        func();
    },delay);
}

function appendData(data){
    if(!data)
    {
        return;
    }
    let container=document.getElementById("movies");
    container.innerHTML=null;
    data.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","movie_tab");

        let img=document.createElement("img");
        img.src=el.Poster;

        let h3=document.createElement("h3");
        h3.innerText=el.Title;

        let book=document.createElement("button");
        book.setAttribute("class","book_now");
        book.innerText="Book Now";
        book.addEventListener("click",function(){
            let arr=[];
            arr.push(el);
            console.log(arr);
            localStorage.setItem("movie",JSON.stringify(arr));
            window.location.href="checkout.html";
        })

        div.append(img,h3,book);
        container.append(div);
    })
}
