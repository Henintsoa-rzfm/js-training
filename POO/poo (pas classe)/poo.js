// user est un objet
let user = {
    // nom, age, mail sont des propriétés de l'objet user
    // nom est un tableau
    nom : ['John', 'Terry'],
    age : 36,
    mail : 'john.terry@gmail.com',

    // Méthode de l'objet user
    bonjour : function(){
        alert('Bonjour, je suis '+ this.nom + ', j\'ai ' + this.age + ' ans et vous pouvez directement m\'envoyer un message via l\'adresse '+ this.mail + ', Je fais ' + this.taille);
    }
};
// alert(typeof user);
document.getElementById('p1').innerHTML = 'Nom : ' + user.nom[0] ;
document.getElementById('p2').innerHTML = 'Prénom : ' + user.nom[1] ;
document.getElementById('p3').innerHTML = 'Age : ' + user.age + ' ans';
document.getElementById('p4').innerHTML = 'Mail : ' + user.mail;

// Modification de l'age
user.age = 46;
document.getElementById('p6').innerHTML = 'Nouvelle age : ' + user.age + ' ans';
user.taille = '1m90';

let presentation = document.getElementById('p5');
presentation.addEventListener("click", function(){ 
    user.bonjour();
});

// Utilisation des []
document.getElementById('p7').innerHTML = 'Nom Complet ' + user['nom'];
document.getElementById('p8').innerHTML = 'Le prénom c\'est => ' + user['nom'] [0];
