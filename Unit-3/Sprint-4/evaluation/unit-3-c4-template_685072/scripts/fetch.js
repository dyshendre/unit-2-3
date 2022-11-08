function appendData(data)
{
    console.log("yes");
    let container=document.getElementById("results");
    container.innerHTML=null;

    data.forEach(function(el) {
        let div=document.createElement("div");
        div.setAttribute("class","news");

        div.addEventListener("click",function(){
            redirect(el);
        });
        
        let div2=document.createElement("div");
        div2.setAttribute("class","img");
        let img=document.createElement("img");
        img.src=el.urlToImage;
        

        let div3=document.createElement("div");
        div3.setAttribute("class","div3");
        
        let h2=document.createElement("h2");
        h2.innerText=el.title;

        let p3=document.createElement("p");
        p3.innerText=el.description;
        
        div2.append(img);
        div3.append(h2,p3)
        div.append(div2,div3);
        container.append(div);
    });
    
}

function redirect({urlToImage,title,content}){

    let obj={
      image:urlToImage,
      title:title,
      content:content
    }
    console.log("obj: ",obj);
    
    let arr=[];
    arr.push(obj);

    localStorage.setItem("newsData",JSON.stringify(arr));
    
    window.location.href="news.html";
  }
  export {appendData};