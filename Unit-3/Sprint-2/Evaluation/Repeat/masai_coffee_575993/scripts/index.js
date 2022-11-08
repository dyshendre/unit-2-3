// Add the coffee to local storage with key "coffee"
makeRequest();

async function makeRequest(){
    try{
        let res=await fetch("https://masai-api.herokuapp.com/coffee/menu");
        let data=await res.json();
        // console.log("data:",data.menu.data);
        let actual_data=data.menu.data;
        console.log(actual_data);
        
        appenData(actual_data);
    }catch(err){
        console.log("err:",err);
    }
}

let bucketLS=JSON.parse(localStorage.getItem("coffee"))||[];

let countValue=document.getElementById("coffee_count");
countValue.innerText=bucketLS.length;

function appenData(actual_data){
    let container=document.getElementById("menu");
    // container.innerHTML=null;

    actual_data.forEach(function(el){
        let div=document.createElement("div");

        let h2=document.createElement("h2");
        h2.innerText=`Title: ${el.title}`;

        let img=document.createElement("img");
        img.src=el.image;

        let price=document.createElement("h3");
        price.innerText=`Price: Rs ${el.price}`;

        let addToBucket=document.createElement("button");
        addToBucket.setAttribute("id","add_to_bucket");
        addToBucket.innerText="Add to Bucket";

        
        addToBucket.addEventListener("click",function(){
            if(addToBucketFunct(el.id)==true)
            {
                addToBucket.innerText="Added to bucket";

                bucketLS.push(el);

                localStorage.setItem("coffee",JSON.stringify(bucketLS));

                countValue.innerText=bucketLS.length;

                alert("Added to bucket");
            }
            else{
                alert("Already present in bucket");

                addToBucket.innerText="Added to bucket";
            }
        })

        div.append(h2,img,price,addToBucket);
        container.append(div);
    })
}
function addToBucketFunct(id){
    for(let i=0;i<bucketLS.length;i++)
    {
        if(bucketLS[i].id==id)
        {
            return false;
        }
    }
    return true;
}