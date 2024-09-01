let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

p2.parentNode.style.backgroundColor = "RGBa(240, 160, 000, 0.5)"; //Orange

// Acceder à tous les enfant de p1. childNodes renvoie une liste
let enfantsP1 = p1.childNodes;

enfantsP1[1].style.fontWeight = 'bolder';

// On accède aux noeuds enfants éléments de p1
// children renvoie une HTMLCollection
let enfantsEltP1 = p1.children;
enfantsEltP1[0].style.textDecoration = 'underline';

// Acceder au premier noeud enfant de body 
let bodyFirstChild = document.body.firstChild;
let bodyLastChild = document.body.lastChild;

// Acceder au premier noeud enfant element de body
let bodyFirstElementChild = document.body.firstElementChild;
let bodyLastElementChild = document.body.lastElementChild;

alert(
    'Premier noeud enfant de body : ' + bodyFirstChild + 
    '\nDernier noeud enfant de body : ' + bodyLastChild + 
    '\nPremier noeud element enfant de body : ' + bodyFirstElementChild + 
    '\nDernier noeud element enfant de body : ' + bodyLastElementChild  

);

// à part firstChild et les autres il y aussi previousSibling et nextSibling
// et aussi previousElementSibling et nextElementSibling
// On a nodeName, nodeType et nodeValue aussi