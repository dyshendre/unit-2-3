// fill in javascript code here

document.querySelector("form").addEventListener("submit", myFunction);

let formTag= document.querySelector("form");

function myFunction(event){
    event.preventDefault();

let name= formTag.name.value;
let employeeID= formTag.employeeID.value;
let department= formTag.department.value;
let exp= formTag.exp.value;
let email= formTag.email.value;
let mbl= formTag.mbl.value;

let tr=document.createElement("tr");
let td1=document.createElement("td");
td1.innerText= name;

let td2=document.createElement("td");
td2.innerText= employeeID;

let td3=document.createElement("td");
td3.innerText= department;

let td4=document.createElement("td");
td4.innerText= exp;

let td5=document.createElement("td");
td5.innerText= email;

let td6=document.createElement("td");
td6.innerText= mbl;

let td7=document.createElement("td");
if(Number(exp)>=5){
    td7.innerText="Senior";
}
else if(2<=Number(exp)<5){
    td7.innerText="Junior";
}
else if(1>Number(exp)){
    td7.innerText="Fresher";
}

let td8=document.createElement("td");
td8.innerText= "DELETE";
td8.style.backgroundColor="red";
td8.addEventListener("click", deleteRow)

tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
document.querySelector("tbody").append(tr);
}

function deleteRow(event){
    event.target.parentNode.remove();
}

