let data=JSON.parse(localStorage.getItem("students")) || [];
let calc=document.getElementById("calculate");
calc.innerText=calculate(data);;

append();

function append(){
    let container=document.getElementById("container");
    container.innerHTML=null;
    
    data.forEach(function (el, index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let p=document.createElement("p");
        p.innerText=el.name;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            remove(index);
        });
        div.append(img,p,btn);
        container.append(div);
    });
}
    

function remove(index){
    let newData=data.filter(function (el,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i !==index;
        }
        });
        localStorage.setItem("students", JSON.stringify(newData));
        append();
        window.location.reload();
}
function calculate(data){
    // let data=JSON.parse(localStorage.getItem('students')) || [];

    let obj={};

    for(let i=0;i<data.length;i++)
    {
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0;
        }
    }

    for(let i=0;i<data.length;i++)
    {
        obj[data[i].batch]++;
    }
    console.log(obj);
    // return obj;
    let jhola="";
    for (let key in obj)
    {
        jhola=jhola+key+":"+obj[key]+", ";
    }
    // console.log("*"+jhola)
    return jhola;
}
// calculate(data);