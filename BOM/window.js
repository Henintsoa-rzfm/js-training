// Interface window
document.getElementById('p1').innerHTML = 
'Taille de la fenêtre (extérieur) : ' + window.outerWidth + ' x ' + window.outerHeight ;

document.getElementById('p2').innerHTML = 
'Taille de la fenêtre (intérieur) : ' + window.innerWidth + ' x ' + window.innerHeight ;

// Les méthodes de window
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

let winSize = 'width = 500, height = 500';
b1.addEventListener('click', openWindow);
b2.addEventListener('click', resizeWindowBy);
b3.addEventListener('click', resizeWindowTo);

function openWindow(){
    fenetre = window.open('https://www.google.com', '',winSize);
}
function resizeWindowBy(){
    fenetre.resizeBy(200, 100);
}
function resizeWindowTo(){
    fenetre.resizeTo(960, 720);
}