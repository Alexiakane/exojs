/*let cinq = 5;
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

let age = 15;


if (age >=18){ 

    console.log("majeur");
    }else {

    console.log("mineur");
    };

let i = 1;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i); 
    }
  };
 
/*const numb = Math.floor(Math.random() *100) + 1;
let response = parseInt(prompt("Devine un nombre entre 1 et 100"));

while (true) {
    if (numb === response) {
        alert("Bravo ! Tu as trouvé");
        break;
    } else if (numb > response) {
        response = parseInt(prompt("C'est plus !"));    
    } else {
        response = parseInt(prompt("C'est moins !"));
    }
}*/

/*if (m == 1){
        return 31;
    }else{
        return 0;
    }*/

/*let mois = window.prompt("le mois ?");
let annee = window.prompt("l'année ?");

function nbrej(m, a) {
   switch (m) {
    case "1": case "3": case "5": case "8": case "7": case "10": case "12":
        return 31;
        break;
    case "4": case "6": case "9": case "11":
        return 30;
        break;
    case "2" :
        if (a % 400 == 0 || ((a % 4 == 0) && (a % 100 != 0))){ 
            return 29;
        }else { 
            return 28;
        }
    default:
        return "entrée incorrecte";
        break;
   }
  }

let jour = nbrej (mois, annee);

console.log(jour);*/


/*const btn = document.createElement("button");
btn.innerHTML = "Cliquez ici";
document.body.appendChild(btn);

const parag = document.createElement("p");
document.body.appendChild(parag);

let para = document.querySelector("p");

btn.addEventListener('click', () => {
    para.textContent = "Hello world";
})

const btn1 = document.createElement("button");
btn1.innerHTML = "Cliquez là";
document.body.appendChild(btn1);

const parag1 = document.createElement("p");
parag1.innerText = "Coucou"
document.body.appendChild(parag1);

btn1.addEventListener('click', () => {
    parag1.style.color = "red";
})

const btn2 = document.createElement("button");
btn2.innerHTML = "Ou Cliquez là";
document.body.appendChild(btn2);

//const list = document.createElement("li");
//document.body.appendChild(list);

//let liste = document.querySelector("li");

btn2.addEventListener('click', () => {
    const liste = document.createElement("li");
    liste.innerText = "Nouvel élément";
    document.body.appendChild(liste)
    const list = document.createElement("ul");
    document.body.appendChild(list);
})

    const listes = document.createElement("ul");
    document.body.appendChild(listes);
    const lists = document.createElement("li");
    lists.innerText = "Premier";
    document.body.appendChild(lists)
    const list1 = document.createElement("li");
    list1.innerText = "Deuxieme";
    document.body.appendChild(list1)
    const list2 = document.createElement("li");
    list2.innerText = "Troisieme";
    document.body.appendChild(list2)


const btn3 = document.createElement("button");
btn3.innerHTML = "Pas là";
document.body.appendChild(btn3);

btn3.addEventListener('click', () => {
    document.body.removeChild(lists);
})

const btn4 = document.createElement("button");
btn4.innerHTML = "Un";
document.body.appendChild(btn4);

const btn5 = document.createElement("button");
btn5.innerHTML = "Deux";
document.body.appendChild(btn5);

const btn6 = document.createElement("button");
btn6.innerHTML = "Trois";
document.body.appendChild(btn6);

ça c'est caca =>function choix(bouton)
    alert("C'est le bouton"+ bouton);

bouton.onclick = (e.which);*/

let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}

console.log(data.name);
console.log(data.ppu);
console.log(data.topping);
console.log(data.batters.batter[3].type);
console.log(data.topping[6].type);
console.log(data.topping[1].id);


