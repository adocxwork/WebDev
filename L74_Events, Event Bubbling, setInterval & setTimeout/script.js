let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     // alert("I was clicked..")
//     document.querySelector(".box").innerHTML = "<b>Yeah..! you were clicked..!</b> Enjoy"
// })

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yeah..! you were double clicked..!</b> Enjoy"
})

button.addEventListener("contextmenu", ()=>{
    alert("Right click...");
})

document.addEventListener("keydown", (e)=>{
    // alert("keydown...");
    console.log(e.key, e.keyCode);
})