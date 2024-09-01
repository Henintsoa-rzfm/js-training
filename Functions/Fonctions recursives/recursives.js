// Une fonction récursive est une fonction qui va s’appeler elle-même au sein de son code.
// Tout comme pour les boucles, les fonctions récursives vont nous permettre d’exécuter une
// action en boucle et jusqu’à ce qu’une certaine condition de sortie soit vérifiée.
function decompte(t) {
    if (t > 0) {
        document.getElementById('p2').innerHTML += t + '<br>';
        // Continue the countdown recursively
        decompte(t - 1);
    } else {
        return t;
    }
}
let ti = document.getElementById('p1');
ti.addEventListener('click', function(){
    let user_input = prompt('Entrer un entier :');
    user_input = parseInt(user_input, 10);  // Convert the input to an integer

    if(user_input > 0){
        document.getElementById('p2').innerHTML += user_input + '<br>';        
        decompte(user_input - 1);
    }else{
        return user_input;
    }
})

















// function decompte(t){
//     if(t > 0){
//         document.getElementById('p2').innerHTML += t + '<br>';
//         return decompte(t - 1);
//     }else{
//         return t;
//     }
// }

// decompte(10);