let data = JSON.parse(localStorage.getItem("added"))
addEventListener("h2").innerText = "data"
let sum =0;
for(let i=0; i<data.length; i++){
    let div1 = document.createElement("div")
    let img =document.createElement("img")
    img.setAttribute("src" ,data[i].image_url)
    let p1 = document.createElement("p")
    p1.innerText = data[i].name;
    let p2 = document.createElement("p")
    p2.innerText = data[i].price
    let p3 = document.createElement("p")
    p3.innerText = data[i].strikedoffprice;
    let col1 = document.createElement("input")
    let btn1 = document.createElement("button")
    btn1.innerText = "ADD"
    btn1.addEventListener("click",function(){
      p2.innerText = data[i].price*col1.value
    
      });
      sum+=+data[i].price
    let btn2 = document.createElement("button")
    btn2.innerText = "DELETE"
    btn2.addEventListener("click",function(){
        event.target.parentNode.remove();
        data.splice(data.length[i],1)
        localStorage.setItem("add",JSON.stringify(data))
    })

    
  
    div1.append(img,p1,p2,p3,col1,btn1,btn2);
    document.querySelector("div").append(div1)
  
    
  }