let n = 10;
let resultat = n+',';
//décompte de N tant qu'il est supérieur à 0
while(n >0){
//  n qui est égal à 10 d'origine on décompte 1 à chaque fois
n = n - 1;
// on ajout n en ligne 9,8,7 avec la virgule à chaque fois
resultat += n+',';
}
//on affiche le resultat
document.write(resultat);
