let alerte = function (){
    alert('alerte executée par la fonction anonyme');
}
alerte();

// Fonction anonyme auto invoquée
(function(){alert('Fonction anonyme auto invoquée')})();

// Fonction nommée auto invoquée
(function base(){alert("Nommée auto invoquée")})();

// Fonction anonyme lors dy déclenchement d'event
let para1 = document.getElementById('p1');
let para2 = document.getElementById('p2');

para1.addEventListener('click', function(){alert("Vous avez cliqué sur p1")()});
para2.addEventListener('click', function(){alert("Là c'est p2")()});