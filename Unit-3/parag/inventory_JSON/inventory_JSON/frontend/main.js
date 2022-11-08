// Use deployed URL.

window.addEventListener("load",()=>{
    getData()
})

let submit = async () => {

  let item  = {

    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    description : document.getElementById("description").value,
    delivery : document.getElementById("delivery").value,
    image : document.getElementById("image").value,
    id: Date.now()

  }
//   let res = await fetch("https://enigmatic-lowlands-68656.herokuapp.com/api/data",{
  let res = await fetch("https://peaceful-bastion-55262.herokuapp.com/api/array",{
    method:"POST",
    body:JSON.stringify(item),
    headers: {
        "Content-Type" : "application/json"
    }
  })
  res = await res.json()
//   console.log(res)


  document.getElementById("name").value = ""
  document.getElementById("price").value = ""
  document.getElementById("description").value = ""
  document.getElementById("delivery").value = ""
  document.getElementById("image").value = ""


}



let getData =async () => {
    let res = await fetch("https://peaceful-bastion-55262.herokuapp.com/api/array")
    // let res = await fetch("https://enigmatic-lowlands-68656.herokuapp.com/api/data")
    data = await res.json()
    // console.log(data)
    append(data)

} 

let append  = (data) => {
    let container   = document.getElementById("container")
    container.innerHTML = "";
   data.forEach(({name,price,description,delivery,image,id}) => {
    let img =  document.createElement("img")
    img.src = image
    let imgdiv  = document.createElement("div")
    imgdiv.setAttribute("id","imgdiv")
    imgdiv.append(img)

    let h3 = document.createElement("h3");
    h3.innerText = name;

    let p = document.createElement("p");
    p.setAttribute("class","product_price")
    p.innerText = price;

    let deli = document.createElement("p");
    deli.innerText = delivery;

     let desc = document.createElement("p");
     desc.innerText = description

     div1 = document.createElement("div")
    div1.setAttribute("id","div1")

     let remove_btn = document.createElement("button");
     remove_btn.innerText = "Remove"
     remove_btn.onclick = ()=> {
        remove(id)
     }


     let update_btn = document.createElement("button");
     update_btn.innerText = "Update Price";
     update_btn.onclick = ()=> {
        update_price(id)
     }
    

     div1.append(remove_btn,update_btn)
     let box = document.createElement("div");
     box.setAttribute("class","item")
     box.append(imgdiv,h3,p,deli,desc,div1);
     let boxout = document.createElement("div");
     boxout.setAttribute("id","boxout")
     boxout.append(box)
container.append(boxout)
    
   })
//    All the products will be appended inside div with ID :- "container".
//    8. Every product card will have class :- "item",
//    9. The price in every card will have class :- "product_price" ,
//    NOTE:- Show only price amount in number, no extra tesxt should be there.
//    10.The delivery in every card will have class :- "product_delivery" 
//    11. The remove button will have class :- "remove_item",
//    12. The update button will have class :- "update_price" -->

}



let update_price = async (id) => {
    let old_price = await fetch(`https://enigmatic-lowlands-68656.herokuapp.com/api/data/${id}`)
    let new_price = window.prompt("Enter new Price");

    let data = {price:new_price || old_price.price}

    let res = await fetch(`https://enigmatic-lowlands-68656.herokuapp.com/api/data/${id}`,{
        method: "PATCH",
        body:JSON.stringify(data),
        headers: {
        "Content-Type" : "application/json"
    }
    })

     
    getData()
     
}



let remove = async (id) => {
    



    let res = await fetch(`https://enigmatic-lowlands-68656.herokuapp.com/api/data/${id}`,{
        method: "DELETE",
        headers: {
        "Content-Type" : "application/json"
    },
    })

    data1 = await res.json()
    // console.log(data1)

     
    getData()
     
}




let lowto = async () => {
    let res  =await fetch(`https://enigmatic-lowlands-68656.herokuapp.com/api/data?_sort=price&_order=asc`);
    res = await res.json();
    append(res)
}

let highto = async () => {
    let res  =await fetch(`https://enigmatic-lowlands-68656.herokuapp.com/api/data?_sort=price&_order=desc`);
    res = await res.json();
    append(res)
}
  
    // let res  =await fetch(`https://enigmatic-lowlands-68656.herokuapp.com/api/data?_sort=price&_order=asc`);
    // res = await res.json();
    // console.log(res)

    
// let high1 = async () => {
//     let res  =await fetch(`https://enigmatic-lowlands-68656.herokuapp.com/api/data?price=${4000}&_order=asc`);
//     res = await res.json();
//     append(res)
// }
