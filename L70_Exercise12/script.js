function randomColor() {
    let r = Math.random();
    if(r <= 0.1) return "red";
    else if(r <= 0.3) return "blue";
    else if(r <= 0.4) return "green";
    else if(r <= 0.5) return "lightblue";
    else if(r <= 0.7) return "orange";
    else if(r <= 0.9) return "pink";
    else return "lightgreen";
}

for(let a of document.body.firstElementChild.children) {
    a.style.color = randomColor();
    a.style.backgroundColor = randomColor();
}