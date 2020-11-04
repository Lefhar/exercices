
function strtok(str1,str2,n){
    //on recupére entre le délimiteur et la valeur de n
        var mot1 = str1.split(str2,n);
        //on retire 1 a la valeur de n a cause du zero
    var selectnbr = n -1
    //on recupére le mot numero selectnbr 
      var retourmot = mot1[selectnbr]
    //on affiche le numéro choisi et le mot séléctionné
     document.write("le mot N°"+n+"  est " +retourmot)
    }
    
  var str2 = ";";//délimiteur
  var  str1 = "";//on déclare
  var numero = 1;
  var motentrer = true//on lui attribue true pour commencer
    while(motentrer) {//boucle jusqu'a temps que motentrer soit à false
    var motselect  = window.prompt("Entrer le mot n°"+numero);
        if (motselect != null&&motselect != "") {
             str1 += motselect+";"
            numero ++
     }else{
        motentrer = false;
    break
     }
     }
     // on s'assure que la valeur de n soit lu en tant que entier
     n  = parseInt(window.prompt("entré un chiffre"));
     //appel de la fonction str1 les mot str2 le délimiteur n le numéro du mot séléctionné
  strtok(str1,str2,n);