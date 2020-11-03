 var entier =0
var entrer = true
 var result = 0;
 var nbr = 0

 while(entrer) {
    entier = window.prompt("entrer un entier");
    if (entier>0 && entier != null) {
        result = parseFloat(result)+parseFloat(entier)
        nbr ++
 }else{
break
 }
}
console.log(result,nbr)
var moyenne = result / nbr;
 document.write("le total est ="+result+ " et la moyenne est égal à "+moyenne);