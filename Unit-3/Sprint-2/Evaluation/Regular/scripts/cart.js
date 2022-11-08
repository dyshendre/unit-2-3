
cartLS=JSON.parse(localStorage.getItem("cart-items")) || [];
display(cartLS);
function display(cartLS) {
    let container2 = document.getElementById("cart");
    container2.innerHTML=null;
    
    let cartPrice = cartLS.map(function (element) {
        return element.price;
    }).reduce(function (acc, curr) {
        return acc + curr;
    });
    
    let cartValue = document.querySelector("#cartValue");
    cartValue.innerHTML = "Balance in wallet: $ "+ (700-cartPrice);
    
    cartLS.forEach(function (el,index) {

        let h2 = document.createElement("h2");
        h2.innerText = `Name: ${el.name}`;

        let h22 = document.createElement("h2");
        h22.innerText = `Price: ${el.price}`;

        let pic = document.createElement("img");
        pic.src = el.image;

        let remove=document.createElement("button");
        remove.setAttribute("class","remove");
        remove.innerText="Remove";
        remove.addEventListener('click',function(){
            deleteBox(index);
        });

        let div = document.createElement("div");
        div.append(h2, h22, pic,remove);
        container2.append(div);
    })
}
function deleteBox(index){
    // window.location.reload();
    cartLS.splice(index,1);
    localStorage.setItem(("cart-items"),JSON.stringify(cartLS));
    display(cartLS);
}

