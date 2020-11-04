

  //var str1 ="robert dupont amiens 80000";
 
  var str2 = ";";
  var  str1 = "";
  var numero = 1;
  var motentrer = true
 
    while(motentrer) {
    var motselect  = window.prompt("Entrer le mot n°"+numero);
        if (motselect != null&&motselect != "") {
             str1 += motselect+";"
            numero ++
     }else{
        motentrer = false;
    break
     }
     }
     n  = window.prompt("entré un chiffre");
     console.log("liste des mot"+str1)
  strtok(str1,str2,n);
    


function strtok(str1,str2,n){
 var nf = parseInt(n)
    var mot1 = str1.split(str2,nf);
var selectnbr = nf -1
  var retourmot = mot1[selectnbr]
    
    console.log("retour fonction mot 1 "+mot1+" suite "+mot1[0][nf],retourmot,n)
    document.write("le "+nf+" mot est " +retourmot)
}
