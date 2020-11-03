// on demande un nombre
var N = window.prompt('entrer un nombre');
//on demande le nombre de multiplication qu'on dois faire
var x = window.prompt('entrer le nombre de multplication');
//  on donne la valeur de 1 a multi 
//  aprés on s'assure que multi soit inférieur ou égal à x 
// aprés sa chaque fois on rajoute +1 à multi
for (multi=1; multi<=x; multi++)
{ 
     // on multipli N par multi qui débute par 1 jusqu'a temps qu'il atteind la valeur de x
    resultat = N * multi;
// on écrit les multiplications
    document.write(multi+" * "+N+" = "+resultat+"<br>");
}
