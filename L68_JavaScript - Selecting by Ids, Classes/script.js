console.log("Aditya..");


// let boxes = document.getElementsByClassName("box");
// console.log(b);
// boxes[2].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red";

// this will only work with the 1st matching selector
// document.querySelector(".box").style.backgroundColor = "red";


console.log(document.querySelectorAll(".box")); //returns a collection

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green";
})

// document.getElementsByTagName("div")
// HTMLCollection(7) [div.container, div.box, div.box, div.box, div#red.box, div.box, div.box, red: div#red.box]

// e = document.getElementsByTagName("div")
// e[4].matches("#red")

// e[3].closest(".container") //returns the closest ancesstor

// document.querySelector(".container").contains(e[4])