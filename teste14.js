var nbtb = parseInt(window.prompt("entrer le nombre de d'élément"));
var tableau = new Array(nbtb);
console.log(nbtb)
for(i=0; i<nbtb; i++){
     tableau[i] = window.prompt(" entrer vos "+nbtb+"élément");
}
document.write(i+"élément du tableau "+tableau);