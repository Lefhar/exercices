var ncp = parseInt(window.prompt("entrez le nombre de copie effectuée(s)"))
if(isNaN(ncp)){
document.write("veuillez entrer un nombre correct")
}else if(ncp>0&&ncp<=10){
    var result = parseFloat(ncp)*0.10
}else if(ncp>10&&ncp<=30){
    var result1 = parseFloat(ncp)-10
    var result10 = 10 *0.10;
    var result30 = parseFloat(result1) *0.09
    var resufinal = parseFloat(result10)+parseFloat(result30)
}else if(ncp>30){
    var result1 = parseFloat(ncp)-10
    var result10 = 10 *0.10;
    var result301 = parseFloat(ncp)-20
    var result30 = parseFloat(result301) *0.09
    var resulsup1 = parseFloat(ncp)-30
    var resulsup = parseFloat(resulsup1) *0.08
    var resufinal = parseFloat(result10)+parseFloat(result30)+parseFloat(resulsup)

}else{
    document.write("nous avons un souci entré correctement le nombre de copie")
}
if(isNaN(resufinal)){
document.write("nous avons un souci entré correctement le nombre de copie")
}else{
    document.write("sa vous coûtera "+resufinal+" 22euro") 
}
