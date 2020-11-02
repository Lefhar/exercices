var nombre = 0;
var nbr = 1 ;
var a = '', prenom,
entrer = true;
//entrer est égal à true
while (entrer) {
//boite prompt de saisi
    prenom = prompt('saisissez le prenom n° '+nbr);
   if (prenom) {
//si un prenom à était entré on l'ajoute à la liste 
       a += prenom + ','; 
    //nombre de saisi
nombre = nombre + 1;
//pour l'affichage de la numérotation
nbr++
   } else {
       //on quitte la boucle
break;
   }

}
document.write("vous avez saisi "+nombre+ " prenom(s) voici la liste "+ a)