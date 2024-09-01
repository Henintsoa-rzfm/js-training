class Ligne{
    constructor(nom, longueur){
        this.nom = nom;
        this.longueur = longueur;
    }

    taille(){document.getElementById('p1').innerHTML += 
        'Longueur de ' + this.nom + ' : ' + this.longueur +'<br>'};
}

let geo1 = new Ligne('Geo1', 10);
let geo2 = new Ligne('Geo2', 5);
geo1.taille();
geo2.taille();

// Classe étendue et héritage
class Rectangle extends Ligne{
    constructor(nom, longueur, largeur){
        super(nom, longueur); // Appelle le constructeur parent
        this.largeur = largeur;
    }

    aire(){document.getElementById('p2').innerHTML += 
        'Aire de ' + this.nom + ' : ' + this.longueur * this.largeur + '<br>'};
}

let geo3 = new Rectangle('Geo3', 15, 5);
geo3.taille();
geo3.aire();