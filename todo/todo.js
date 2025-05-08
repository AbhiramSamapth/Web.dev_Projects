let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    if (inp.value.trim() === "") {
        alert("Please enter a task");
        return; 
    }
    let item = document.createElement("li");
    item.innerText=inp.value;
    let del = document.createElement("button");
    del.classList.add("delete");
    del.innerText="delete";
    ul.appendChild(item);
    item.appendChild(del);
    console.log(inp.value);
    inp.value="";
    btn.style.backgroundColor= "black";

});
btn.addEventListener("mouseenter",function(){
    btn.style.backgroundColor= "black";
});


let uls= document.querySelector("ul");
uls.addEventListener("click",function(event){
    
    console.dir(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
});

inp.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        btn.click(); 
    }
});
