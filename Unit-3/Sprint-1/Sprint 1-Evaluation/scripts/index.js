//store the products array in localstorage as "data"
// let form=document.querySelector("form");
let form=document.getElementById("product_form");
form.addEventListener("submit",storeData);

function nike(b,n,p,i){
    this.brand=b;
    this.name=n;
    this.price=p;
    this.image=i;
}

let dataArr=JSON.parse(localStorage.getItem("data")) || [];

function storeData(event){
event.preventDefault();

// let obj={
let brand=form.product_brand.value;
let name=form.product_name.value;
let price=form.product_price.value;
let image=form.product_image.value;
// }

console.log(brand, name, price, image);

let n1=new nike(brand, name, price, image);

// dataArr.push(obj);
dataArr.push(n1);

console.log(dataArr);

localStorage.setItem("data",JSON.stringify(dataArr));
}

document.getElementById("redirect").addEventListener("click",function(){
    window.location.href="inventory.html";
});