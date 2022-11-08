// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketLS=JSON.parse(localStorage.getItem("coffee"))||[];
total_amount();

display(bucketLS);

function display(bucketLS){
    let container=document.getElementById("bucket");
    container.innerHTML=null;

    bucketLS.forEach(function(el,index){
        let div=document.createElement("div");

        let h2=document.createElement("h2");
        h2.innerText=`Title: ${el.title}`;

        let img=document.createElement("img");
        img.src=el.image;

        let price=document.createElement("h3");
        price.innerText=`Price: Rs ${el.price}`;

        let remove=document.createElement("button");
        remove.setAttribute("id","remove_coffee");
        remove.innerText="Remove coffee";

        remove.addEventListener("click",function(){
            deleteBox(index);
        })

        div.append(h2,img,price,remove);
        container.append(div);
    })
}
function deleteBox(index){
   bucketLS.splice(index,1);
   localStorage.setItem("coffee",JSON.stringify(bucketLS));
   display(bucketLS);
   total_amount();
}

function total_amount(){
    let total=0;
    
    for(let i=0;i<bucketLS.length;i++)
    {
        total +=Number(bucketLS[i].price);
    }
    let bucketValue=document.getElementById("total_amount");
    bucketValue.innerText=total;
}

/*function total_amount{
    let total=bucketLS.map(function(el){
        return el.price;
    }).reduce(function(acc,curr){
        return acc+curr;
    },0);

    let bucketValue=document.getElementById("total_amount");
    bucketValue.innerText=total;
}*/