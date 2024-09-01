// Accède au contenu HTML interne et le modifie
document.querySelector('div').innerHTML +=
'<ul><li>Elément n°1</li><li>Element n°2</li></ul>';

// Accède au HTML du 1er paragraphe du doc et le modifie
document.querySelector('p').outerHTML = '<h2>Je suis le titre h2</h2>';

// acceder à id texte et le modifie
document.getElementById('texte').textContent = '<span>Texte modifié</span>';

// Accède au texte visible de l'element p2
let texteVisible = document.getElementById('p2').innerText;

// Accède au texte (visible ou non) de l'élément avec l'id = 'p2'
let texteEntier = document.getElementById('p2').textContent;

// Affiche le résultat du dessus dans p3
document.getElementById('p3').innerHTML = 
'Texte visible : ' + texteVisible + '<br> Texte complet : ' + texteEntier;