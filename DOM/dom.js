// Select first paragraph and change its content with the textContent property
document.querySelector('p').textContent = '1er paragraphe du document';

let documentDiv = document.querySelector('div'); // First div in the document
documentDiv.querySelector('p').textContent = '1er paragraphe présent dans le div';

//Change the color of paragraph element with the class = 'Bleu' inside the div
document.querySelector('p.bleu').style.color = 'blue';

// select all the paragraph
let documentParas = document.querySelectorAll('p');

//select all the paragraph of the first div
let divParas = documentDiv.querySelectorAll('p');

// forEach sur l'objet Nodelist documentParas pour rajouter du texte dans chaque paragraphe de notre document
documentParas.forEach(function(nom, index){
    nom.textContent += ' (paragraph n°: ' + index + ')';
});

// select element with class = 'bleu'
let bleu = document.getElementsByClassName('bleu')
//"bleu" est un objet de HTML Collection qu'on va manipuler comme un tableau
// c'est le titre qu'on vient d'avoir en bleu
for(valeur of bleu){
    valeur.style.color = 'blue';
}

// Modifie le titre de la page (de DOM à Document Object Model)
document.title = 'Le Document Object Model';