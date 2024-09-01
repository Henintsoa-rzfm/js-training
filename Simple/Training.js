let first_name = 'Rakoto';
let age = 29;
let age2 = "29";

var contenu = document.getElementById('o').textContent;
var con = document.getElementById('p5').textContent;

document.getElementById('p1').innerHTML = 'Je m\'appelle ' + first_name + ', j\'ai ' + age + ' ans;';
document.getElementById('p2').innerHTML = 'Le type de first_name => ' + typeof first_name;
document.getElementById('p3').innerHTML = 'Le type de age => ' + typeof age;
document.getElementById('p4').innerHTML = 'Le type de age2 => ' + typeof +age2;
document.getElementById('p5').innerHTML = con + ' '+ contenu;

document.getElementById('p6').innerHTML = age >=20 ? first_name+ ' a plus de '+ age + ' ans. '+ 'This is the Math.random() => ' +Math.random() : 'Il a moins de' + age + ' ans' + Math.random();

