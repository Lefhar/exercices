function GetInteger(){
integer = parseInt(window.prompt("entrer un nombre de d'élément"));
  
    }

function InitTab(integer){
           itab = new Array(integer); // création du tableau
           itab.splice(0, integer);       
        }
function SaisieTab(integer,itab){//saisi des éléments
    var saitab = '';
    for(var i=0; i<integer;i++){
        // on entre dans le tableau les éléments jusqu'a temps qu'on arrive au nombre inscrit juste avant
        saitab = window.prompt('indiquer une valeur à entrer dans le tableau :');
        var table = itab.push(saitab);
        console.log(table);
    }
   
}
    function AfficheTab(){//on affiche le tableau
        console.log(itab);
        alert(itab.join(', '));
 }

   function RechercheTab(){
    var select = parseInt(window.prompt(`Afficher un index choisi`));
    var retab = itab[select];
    alert(itab[select])
   } 
   function InfoTab(){
    console.log(Math.max(...itab));
       //le tableau début a 0
       var debut= 0;
       // on recupére la valeur maximum du tableau
       var max = Math.max(...itab);
       for(var i=0; i<itab.length;i++){
        debut += parseInt(itab[i])   
       }
       console.log("valeur debut"+debut)
      //ensuite on calcule la moyenne du tableau 
      var moyenne = debut/itab.length;
      // on affiche notre moyenne d'élément
      alert("la valeur maximum est "+max+" et la moyenne du tableau "+moyenne)
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