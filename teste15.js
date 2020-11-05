function GetInteger(){
integer = parseInt(window.prompt("entrer un nombre de d'élément"));
  
    }

function InitTab(integer){
           itab = new Array(integer); // création du tableau
           itab.splice(0, integer);       
        }
function SaisieTab(integer,itab){
    var n = integer
    console.log(integer)
    var tableau = itab
    for(var i=0; i<n;i++){
         tableau[i] = window.prompt("entrer le mot"+i);
     

    }
}
    function AfficheTab(tableau){
        var table = tableau;
        document.write(table)
    }


GetInteger();
 InitTab(integer);
SaisieTab(integer,itab);
AfficheTab(table)