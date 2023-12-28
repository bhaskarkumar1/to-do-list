let btn=document.getElementById("add-button")
btn.addEventListener("click",function(){

    myfunc(ls);
});
ls=[]



function myfunc(ls){
    // console.log("I got clcick")
    let ip=document.getElementById("input").value
    // console.log(ip)
    if (ip!=""){
        ls.push(ip)
        
    
    
    
    // console.log(ls)
    let newdiv=document.createElement("div")
    newdiv.className="task"


    let radio=document.createElement("input")
    radio.type="radio"

    let para=document.createElement("p")
    // para.textContent=ls[ls.length-1]
    para.innerHTML=ls[ls.length-1]


    let icon=document.createElement("i")
    icon.className="fa-solid fa-xmark"
    icon.id="cross"

    newdiv.appendChild(radio)
    newdiv.appendChild(para)
    newdiv.appendChild(icon)

    document.getElementById("task-container").appendChild(newdiv)

    let reset=document.getElementById("input")
    reset.value=""
    // delete the parent element 
    icon.addEventListener("click", function () {
        // Get the parent element (task div) and remove it
        // this.parentNode.remove();

        // get the icon which was clicked
        let clickedicon=this
        // get the parent element of this icon 
        let parentnode=clickedicon.parentNode;
        // remove the parent node  
        parentnode.remove()
    });



} 
}



    // Add a click event listener to the newly created cross icon
  