/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

function adjGen() {
    let r = Math.random();
    if (r <= 0.33) return "Crazy";
    else if (r <= 0.66) return "Amazing";
    else return "Fire";
}
function shopGen() {
    let r = Math.random();
    if (r <= 0.33) return "Engine";
    else if (r <= 0.66) return "Foods";
    else return "Garments";
}
function anotherGen() {
    let r = Math.random();
    if (r <= 0.33) return "Bros";
    else if (r <= 0.66) return "Limited";
    else return "Hub";
}

console.log(`Business Name : ${adjGen()} ${shopGen()} ${anotherGen()}`)