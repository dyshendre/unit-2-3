let arr=JSON.parse(localStorage.getItem("checkout")) || [];
let form=document.querySelector("form");
form.addEventListener("submit", function(){
    event.preventDefault();
    alert("Submitted");
let data={
    name:form.user_name.value,
    number:form.user_number.value,
    adress:form.user_address.value,
}
arr.push(data);
localStorage.setItem("checkout",JSON.stringify(arr));
setTimeout(function(){
    alert("Your order is confirmed");
},0)
setTimeout(function(){
    alert("Your order is being Packed");
},3000)
setTimeout(function(){
    alert("Your order is in transit");
},8000)
setTimeout(function(){
    alert("Your order is out for delivery");
},10000)
setTimeout(function(){
    alert("Order delivered");
},12000)
})

