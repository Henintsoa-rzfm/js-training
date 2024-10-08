function Ligne(longueur){
    this.longueur = longueur;
}

Ligne.prototype.taille = function(){
    document.getElementById('p1').innerHTML = 'longueur : ' + this.longueur;
}

function Rectangle(longueur, largeur){
    Ligne.call(this, longueur);
    this.largeur = largeur;
}

Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = function(){
    document.getElementById('p2').innerHTML = 
    'Aire : ' + this.longueur * this.largeur;
}

function Parallelepipede(longueur, largeur, hauteur){
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
}

Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.surface = function(){
    document.getElementById('p3').innerHTML = 
    'Surface : ' + this.longueur * this.largeur * this.hauteur;
}

let geo = new Parallelepipede(5, 4, 3);
geo.surface();
geo.aire();
geo.taille();