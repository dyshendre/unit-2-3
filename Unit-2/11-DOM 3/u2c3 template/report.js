// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks


document.querySelector('form').addEventListener("submit",myFunction);

let formTag=document.querySelector("form");

function myFunction(event){
    event.preventDefault(event);
    let avatar=formTag.image.value;
    let name=formTag.name.value;
    let batch=formTag.batch.value;
    let dsa=formTag.dsa.value;
    let skill=formTag.cs.value;
    let coding=formTag.coding.value;

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    let pic=document.createElement("img");
    pic.setAttribute("src",avatar);
    td1.append(pic);
    
    let td2=document.createElement("td");
    td2.innerText=name;
    
    let td3=document.createElement("td");
    td3.innerText=batch; 
    
    let td4=document.createElement("td");
    td4.innerText=dsa; 
    
    let td5=document.createElement("td");
    td5.innerText=skill; 
    
    let td6=document.createElement("td");
    td6.innerText=coding; 

    let obtainedMarks=Number(dsa)+Number(skill)+Number(coding);
    let percentage= (obtainedMarks/30)*100;

    let td7=document.createElement("td");
    td7.innerText=percentage.toFixed(3);

    let td8=document.createElement("td");
    if(percentage>50){
        td8.innerText="Regular"
    }else{
        td8.innerText="Async";
        td8.style.color="red";
    }
    
    let td9=document.createElement("td");
    td9.innerText="DELETE"
    td9.style.backgroundColor="red";
    td9.addEventListener("click",deleteRow)

   tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
   console.log(tr);
   document.querySelector("tbody").append(tr);
}

function deleteRow(event){
  event.target.parentNode.remove();
}



// document.querySelector('form').addEventListener("submit",myFunction);
// function myFunction(event){
//     event.preventDefault();

//     let avatar=document.querySelector("#image").value;
//     let name=document.querySelector("#name").value;
//     let batch=document.querySelector("#batch").value;
//     let dsa=document.querySelector("#dsa").value;
//     let skillathon=document.querySelector("#cs").value;
//     let coding=document.querySelector("#coding").value;

//     console.log(avatar,name, batch, dsa, skillathon, coding);

//     let tr=document.createElement("tr");

//     let td1=document.createElement("td");
    
//     let td2=document.createElement("td");
//     td2.innerText=name;
    
//     let td3=document.createElement("td");
//     td3.innerText=batch; 
    
//     let td4=document.createElement("td");
//     td4.innerText=dsa; 
    
//     let td5=document.createElement("td");
//     td5.innerText=skillathon; 
    
//     let td6=document.createElement("td");
//     td6.innerText=coding; 

//     let obtainedMarks=Number(dsa)+Number(skillathon)+Number(coding);
//     let percentage= (obtainedMarks/30)*100

//     let td7=document.createElement("td");
//     td7.innerText=percentage.toFixed(3);

//     let td8=document.createElement("td");
//     if(percentage>50){
//         td8.innerText="Regular"
//     }else{
//         td8.innerText="Async";
//         td8.style.color="red";
//     }
    
//     let td9=document.createElement("td");
//     td9.innerText="DELETE"
//     td9.style.backgroundColor="red";

//    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
//    document.querySelector("tbody").append(tr);
// }