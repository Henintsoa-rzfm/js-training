let chaine = 'Bonjour, Je m\'appelle Pierre et vous ?';
//Definition de 2 regex differement
let masque1 = /Pierre/;
// let masque2 = new RegExp('Pierre');
/* Intervalle ou"classe" de caractère permettant de trouver n'importe quelle
lettre en majuscule de l'alphabet classique (sans les accents ou cédille*/
let masque2 = /[A-Z]/;
let masque3 = /[A-Z]/g; //Ajout d'une option ou drapeau "global"
let masque4 = /e/;
let masque5 = /ou/g;
// -----------------------------------------------------------------------------
// La méthode match() de l’objet String va nous permettre de rechercher la présence de
// caractères ou de séquences de caractères dans une chaine de caractères

// Recherche de Pierre dans let chaine et la renvoie la première correspondance
document.getElementById('p1').innerHTML = 'Trouvé : ' + chaine.match(masque1);

// Recherche de toute les lettres en majuscule dans chaine et renvoie la première correspondance
document.getElementById('p2').innerHTML = 'Trouvé : ' + chaine.match(masque2);

// Recherche de toute les lettres en majuscule dans chaine et les renvoie tous
document.getElementById('p3').innerHTML = 'Trouvé : ' + chaine.match(masque3);
// -----------------------------------------------------------------------------------

// La méthode search() permet d’effectuer une recherche dans une chaine de caractères à
// partir d’une expression régulière fournie en argument.
document.getElementById('p4').innerHTML = 'Trouvé en position : ' + chaine.search(masque1);
document.getElementById('p5').innerHTML = 'Trouvé en position : ' + chaine.search(masque2);

// La méthode replace() permet de rechercher un caractère ou une séquence de caractères
// dans une chaine et de les remplacer par d’autres caractère ou séquence. On va lui passer
// une expression régulière et une expression de remplacement en arguments.
let p7 = document.getElementById('p7');
p7.innerHTML = chaine.replace(masque4, 'E');
p7.style.color='red';

let splitP7 = chaine.split(" ");
document.getElementById('p8').innerHTML = splitP7[1];

let p9 = document.getElementById('p9');
p9.innerHTML = chaine.replace(masque5, 'OU');

// La méthode split() de l'objet string
let masque6 = /[ ,']/;
// Dès qu'une espace, une virgule ou une apostrophe est rencontrée, la chaine 
// de départ est découpée en une nouvelle sous chaine qui est placée dans un tableau
let sousChaine = chaine.split(masque6);
let p11 = document.getElementById('p11');
p11.innerHTML = 'Premier élément du tableau : ' + sousChaine[0] + 
                '<br> Deuxième élément du tableau : ' + sousChaine[1] + 
                '<br> Troisième élément du tableau : ' + sousChaine[2]; 