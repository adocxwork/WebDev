// let obj= {
//     a : 1,
//     b : "Aditya"
// }
// console.log(obj)

// let animal={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__= animal; //sets rabbit protype = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created..")
    }
    eats(){
        console.log("Kha raha hu")
    }
    jumps(){
        console.log("kud rha hu..")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name)
        console.log('Obj is created and he is a lion..')
    }
    eats(){ // method overriding..
        super.eats()//running parent class's method
        console.log("Kha raha hu & roars...")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)