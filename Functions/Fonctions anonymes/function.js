// Fonction avec js
function aleatoire(){
    return Math.random();
}
function multiplication(nb1, nb2){
    return 'The result of '+ nb1 + ' x ' +nb2 + ' is ' + nb1*nb2;
}
// Calling the aleatoire function
document.getElementById('p1').innerHTML = 'Un nombre décimal aléatoire avec une valeur de '+ aleatoire();
// Calling the multiplication function
document.getElementById('p2').innerHTML = multiplication(2, 7);



// portéé des variables (diff entre let et var) 
function portee(){
    let x = 1 ;
    var y = 2;

    if(true){
        let x = 5 ;//var differente
        var y = 10 ; //le même qu'au dessus
        document.getElementById('p3').innerHTML = 'x (dans if) = ' + x;
        document.getElementById('p4').innerHTML = 'y (dans if) = ' + y;
    }
    document.getElementById('p5').innerHTML = 'x (hors if) = ' + x;
    document.getElementById('p6').innerHTML = 'y (hors if) = ' + y;
}
portee();

let presentation = 'Bonjour, je suis Jack';
let prez = presentation.replace("Jour, soir");
document.getElementById('p7').innerHTML = prez;