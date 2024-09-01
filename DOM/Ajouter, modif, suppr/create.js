let b = document.body;
let newP = document.createElement('p');
newP.textContent = 'Paragraphe crée et inséré grace à javascript';
let newTexte = document.createTextNode('Texte écrit en javascript');
let newLastTexte = document.createTextNode('\tTexte appendChild');

// Ajoute le p comme 1er enfant element de body
b.prepend(newP);

// Ajoute le texte comme dernier enfant element de body
b.append(newTexte);
b.appendChild(newLastTexte);

let dernierElt = document.body.lastElementChild;
dernierElt.previousElementSibling.style.color = 'blue';

let p1 = document.getElementById('p1');

let newP1 = document.createElement('p');
newP1.textContent = 'Avec insertBefore';

// insertBefore(noeud à insérer, noeud réference)
b.insertBefore(newP1, p1);