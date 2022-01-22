let btn1=document.querySelector(".btnplus");
let con1=document.querySelector(".con-todos");
let input =document.querySelector(".text");


btn1.addEventListener("click",add)

function add() {
    let bigdiv= document.createElement("div");
    con1.appendChild(bigdiv);

    let div1= document.createElement("div");
    let btnd= document.createElement("button");
    let btnc= document.createElement("button");
    let haken=document.createElement("img")
    let trash=document.createElement("img")
    

    haken.src="haken.svg";
    trash.src="trash.svg";
    

    bigdiv.appendChild(div1);
    bigdiv.appendChild(btnd);
    bigdiv.appendChild(btnc);
    btnd.appendChild(haken);
    btnc.appendChild(trash);
    

    bigdiv.className="bigdiv", "fall";
    div1.className="div1";
    btnd.className="done";
    btnc.className="close";

    div1.textContent=input.value;
    input.value="";

  btnd.addEventListener("click",function () {
    div1.classList.toggle("add");
    bigdiv.classList.toggle("op");
})

  btnc.addEventListener("click",function () {
    bigdiv.classList.add("fall");
    bigdiv.addEventListener("transitionend",function () {
      con1.removeChild(bigdiv);
    })
    
    
    
})


    
}



