function GetInteger(){
integer = parseInt(window.prompt("entrer un nombre de d'élément"));
  
    }

function InitTab(integer){
           itab = new Array(integer); // création du tableau
           itab.splice(0, integer);       
        }
function SaisieTab(integer,itab){//saisi des éléments
    var n = integer
    var tableau = itab
    for(var i=0; i<n;i++){
        // on entre dans le tableau les éléments jusqu'a temps qu'on arrive au nombre inscrit juste avant
         tableau[i] = window.prompt("entrer le mot"+i);
    }
    table =  tableau;
}
    function AfficheTab(table){//on affiche le tableau
        //on demande de séléctionner un élément du tableau
  select = parseInt(window.prompt(`voici vos mots ${table}  entrer le Numéro  que vous souhaitez afficher`));
        }

   function RechercheTab(select){
      var mot = table[select]
document.write("le mot choisi c'est "+mot)
   } 
   function InfoTab(table){
       //le tableau début a 0
       var min = 0
       // on recupére la valeur maximum du tableau
       var max = table.length
       // on additionne le minimum et le maximum d'élément
      var resultat = parseInt(min)+parseInt(max)
      //ensuite on calcule la moyenne du tableau 
      var moyenne = resultat/max;
      // on affiche notre moyenne d'élément
      document.write(" et la moyenne du tableau "+moyenne)
   }
GetInteger();
 InitTab(integer);
SaisieTab(integer,itab);
AfficheTab(table);
RechercheTab(select);
InfoTab(table);