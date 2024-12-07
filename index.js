"use strict";
// variables
let num1 = 24;
let num2;
let numOrString;
//--------
//Tableaux
let arr = ["chien", "chat", "poisson"];
let tableau = [];
let tableau1 = [];
let player = {
    id: 0,
    name: "zidane",
    //jersey: 34
};
//les classes
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
// Les fonctions
const sayMyname = (name) => {
    console.log(`Bonjour ${name}`);
};
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size} cm et il est age de ${age} ans `);
    }
    else {
        console.log(`le capitaine est age de ${age} ans`);
    }
};
// enum et Tuples
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
const user1 = {
    name: "julien",
    attributes: [false, 'author'],
    role: Role.ADMIN
};
console.log(user1.role);
