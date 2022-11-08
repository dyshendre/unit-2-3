
async function makeRequest() {
    try {
        let res = await fetch("https://grocery-masai.herokuapp.com/items")
        // console.log(res);
        let info = await res.json();
        info = info.data;
        console.log('data:',info)
        append(info);
    } catch (err){
        console.log(err);
    }
}
makeRequest();
let cartLS=JSON.parse(localStorage.getItem("cart-items")) || [];



function append(info) {
    let container = document.getElementById("groceries");
    container.innerHTML=null;

    info.forEach(function (el) {

        let h2 = document.createElement("h2");
        h2.innerText = `Name: ${el.name}`;

        let h22 = document.createElement("h2");
        h22.innerText = `Price: ${el.price}`;

        let pic = document.createElement("img");
        pic.src = el.image;

        let addToCart=document.createElement("button");
        addToCart.setAttribute("class","add_to_cart")
        addToCart.innerText="Add to cart";
        addToCart.addEventListener("click",function(){
            if(addToCartFunct(el._id)==true)
            {
                
                console.log(el._id);
               
                cartLS.push(el);

                let cartPrice = cartLS.map(function (element) {
                    return element.price;
                }).reduce(function (acc, curr) {
                    return acc + curr;
                });

                let cartValue = document.querySelector("#wallet");
                cartValue.innerHTML =(700-cartPrice);

                if((700-cartPrice)<=0)
                    {
                         alert("Insufficient balance");
                    }

                localStorage.setItem("cart-items",JSON.stringify(cartLS));
                console.log(cartLS);  

                alert("Added to cart")
                addToCart.innerText="Added to cart";
            }
            else{
                alert("Already present in cart")
                addToCart.innerText="Added to cart";
            }
        })

        let div = document.createElement("div");
        div.append(h2, h22, pic,addToCart);
        container.append(div);
    })
}
function addToCartFunct(id){
    for(i=0;i<cartLS.length;i++)
    {
        if(cartLS[i]._id==id)
        {
            return false;
        }
    }
    return true;
}