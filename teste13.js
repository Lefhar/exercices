// voyelle a, e, i, o, u, y
var mot = window.prompt("Entrer un mot");
var Nbr = 0;
var   voytr="";
var voyelle = ['a', 'e', 'i', 'o', 'u', 'y']
var consonnes
for(var i =0; i<mot.length; i++){
    var lettre = mot.substr(i,1);
//   Nombre de lettre qui correspond a voyelle
    if(voyelle.indexOf(lettre)>=0){
// on ajoute les lettres étant une voyelle à la suite 
     voytr += mot[i] +','
        Nbr++
    }
   
consonnes = mot.length - Nbr;
}
document.write("dans "+ mot + " j'ai trouvé " +Nbr+ " voyelle qui sont "+voytr+"  et " +consonnes+ " consonnes")