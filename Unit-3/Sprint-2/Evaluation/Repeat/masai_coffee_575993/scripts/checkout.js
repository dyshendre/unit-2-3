let arr=[];
function submit(){
    let data={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        address:document.getElementById("address").value,
    }
    arr.push(data);
    console.log(arr);
    setTimeout(function(){
        alert("Your order is accepted");
    },0);
    setTimeout(function(){
        alert("Your order is accepted");
    },3000);
    setTimeout(function(){
        alert("Your order is being packed");
    },8000);
    setTimeout(function(){
        alert("Your order is out for delivery");
    },10000);
    setTimeout(function(){
        alert("Order delivered");
    },12000);
}