let cinq = 5;
let trois = 3;

console.log(cinq + trois);

let ten = 10;
let seven = 7;

console.log(ten - seven);

let quatre = 4;
let six = 6;

console.log(six * quatre);

const prenom = "John";
const nom = " Doe";

console.log(prenom+nom);

const sujet = "Le chat";
const verbe = "mange";
const objet = "la souris";
const phrase = `${sujet} ${verbe} ${objet}`;

console.log(phrase);

let tableau = [1, 2, 3, 4, 5];

console.log(tableau);
console.log(tableau[0]);

let tab = [ ];
let tab1 = tab.push(10, 20, 30);
let first = tab.shift();

console.log(tab);

function saluer(prenom){
    let message = `bonjour, ${prenom}`;
    console.log(message);
}

saluer("Alice")

function multi(sept, huit){
    return sept * huit;
}

console.log(multi(7,8));
