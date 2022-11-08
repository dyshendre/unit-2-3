let arrFromLS=JSON.parse(localStorage.getItem("data")) || [];
// console.log(arrFromLS);
displayTable(arrFromLS);

function displayTable(arrFromLS){
    document.getElementById("products_data").innerHTML="";
    arrFromLS.forEach(function (elem,index){
      // console.log(elem);
      
      let div=document.createElement("div");

      let p1=document.createElement("p");
      p1.innerText="Brand: "+elem.brand;

      let p2=document.createElement("p");
      p2.innerText="Name: "+elem.name;

      let p3=document.createElement("p");
      p3.innerText="Price: "+elem.price;

      let pic=document.createElement("img");
      pic.setAttribute("src",elem.image);
      pic.setAttribute("class","picture");
      
      let button1=document.createElement("button");
      button1.innerText="Remove Product";
      button1.style.backgroundColor= "red";
      
      button1.addEventListener("click",function(){
        deleteBox(index);
    });
    
      div.append(p1,p2,p3,pic,button1);
      document.getElementById("products_data").append(div);
    })
  }

    function deleteBox(index){
        arrFromLS.splice(index,1);
        localStorage.setItem("data",JSON.stringify(arrFromLS));
         displayTable(arrFromLS);
    }
