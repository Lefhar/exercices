function InfoTab(tableau){
       //le tableau début a 0
       var debut= 0;
       for(var i=0; i<tableau.length;i++){
        debut += parseInt(tableau[i])  //on additionne les valeurs du tableau
       }
      //ensuite on calcule la moyenne du tableau 
      var moyenne = debut/tableau.length;
      // on affiche notre moyenne d'élément
      return (" et la somme est "+debut+" et la moyenne du tableau "+moyenne)
   }
var saisi = true;
var resultat = "";
var tableau = new Array(); //initialisation tableau
while (saisi){//on fait une boucle 
var enter = parseInt(window.prompt("entré un chiffre"));// on demande d'entré un chiffre
 if( enter != 0){ //si enter n'est pas égal a zéro dans c'est cas la on exécute
    var resultat = tableau.push(enter); // on entre dans le tableau les données resultat donnera le nombre d'entré
 }else{
     document.write("vous avez saisi "+resultat+" voici les chiffres entré "+tableau+ InfoTab(tableau))
     // on affiche résultat qui correspond au nombre d'entré ainsi que tableau qui liste les chiffre aprés on appel la fonction infotab poure recupéré la moyenne
     break
 }
}