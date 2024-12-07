// variables
let num1:number = 24;
let num2:string;
let numOrString: number|string;

//--------
//Tableaux
let arr = ["chien", "chat", "poisson"];
let tableau: string[] = [];
let tableau1: (number | boolean)[] = [];

//Les Objets
interface Player {
    id:number,
    name:string,
    jersey?:number
}
let player:Player = {
    id: 0,
    name: "zidane",
    //jersey: 34
  };
  
//les classes
class Singer{
    id:number;
    name:string;
    alive?:boolean

    constructor(id:number, name:string, alive?:boolean){
  this.id = id;
  this.name = name;
  this.alive = alive
    }
}
  
// Les fonctions

const sayMyname = (name:string) => {
    console.log(`Bonjour ${name}`);
  };
  
const ageDuCapitaine = (age:number | string, size: number):void =>{
    if(size){
        console.log(`La taille du capitaine est de ${size} cm et il est age de ${age} ans `);
        
    }else {
        console.log(`le capitaine est age de ${age} ans`);
        
    }
}

// enum et Tuples
enum Role {ADMIN, PREMIUM, BASIC}
interface User {
    name: string;
    attributes: [number | boolean, string];
    role: Role
}

const user1:User = {
    name: "julien",
    attributes: [false, 'author'],
    role: Role.ADMIN
}

console.log(user1.role);
