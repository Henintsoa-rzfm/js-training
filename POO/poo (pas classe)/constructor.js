// une fonction constructeur
function User(n, a, m){
    this.nom = n;
    this.age = a;
    this.mail = m;
    
    // Ajout prototype
    User.prototype.new_size = 19;
    User.prototype.bonjour = function(){
        alert('Bonjour, je suis ' + this.nom[0] + ' j\'ai ' + this.age + ' ans');
    }
};

let john = new User(['John','Terry'], 46 , 'john.terry@gmail.com');
let jack = new User(['Jack','Wilshere'], 36 , 'jack.wilsh@gmail.com');
let don = new User(['Donovan','James'], 27 , 'donj@gmail.com');

john.taille = 190;
document.getElementById('p1').innerHTML = 'Taille de John = ' + john['taille'];
document.getElementById('p2').innerHTML = 'Taille de Jack = ' + jack['taille'];
document.getElementById('p3').innerHTML = 'Mail de Donovan = ' + don['mail'];
