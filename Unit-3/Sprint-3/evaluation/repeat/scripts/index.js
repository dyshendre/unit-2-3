// Store the wallet amount to your local storage with key "amount"
console.log("yes");
let get=localStorage.getItem("amount");
get=+get;

let wallet=document.getElementById("wallet");
wallet.innerText=get;

function add_amt(){
    console.log("yes");

    let get=localStorage.getItem("amount");
    get=+get;

    let amt=document.getElementById("amount").value;
    document.getElementById("amount").value=null;
    amt=+amt;
   
    amt=amt+get;
    console.log("amt:",amt);
   
    localStorage.setItem("amount",amt);
   
    wallet.innerText=amt;
    amt.innerText=null;
}
