function GetInteger(){
integer = parseInt(window.prompt("entrer un nombre de d'élément"));
  
    }

function InitTab(integer){
           itab = new Array(integer); // création du tableau
           itab.splice(0, integer);       
        }
function SaisieTab(integer,itab){//saisi des éléments
    var content = '';
    for(var i=0; i<integer;i++){
        // on entre dans le tableau les éléments jusqu'a temps qu'on arrive au nombre inscrit juste avant
        content = window.prompt('indiquer une valeur à entrer dans le tableau :');
        var arrayPush = itab.push(content);
        console.log(arrayPush);
    }
   
}
    function AfficheTab(itab){//on affiche le tableau
        console.log(itab);
        alert(itab.join(', '));
     
 }

   function RechercheTab(select){
    select = parseInt(window.prompt(`Afficher un index choisi`));
    var retab = table[select]

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
SaisieTab(integer, itab);
var choix= parseInt(window.prompt("choisissez une option -1 afficher le tableau -2 afficher un index choisi -3 afficher le max et la moyenne des postes entrer"))
if(choix==1){
    AfficheTab();  
    var choix= parseInt(window.prompt("choisissez une option -1 afficher le tableau -2 afficher un index choisi -3 afficher le max et la moyenne des postes entrer"))

}else if(choix==2){
    RechercheTab();
    var choix= parseInt(window.prompt("choisissez une option -1 afficher le tableau -2 afficher un index choisi -3 afficher le max et la moyenne des postes entrer"))

}else if(choix==3){
    InfoTab();
    var choix= parseInt(window.prompt("choisissez une option -1 afficher le tableau -2 afficher un index choisi -3 afficher le max et la moyenne des postes entrer"))
}

