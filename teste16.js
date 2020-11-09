let tableau = [7,6,17,14,15,3,9,20];
function trie(tableau,order){
    if(order =="asc"){
        return tableau.sort((a,b) =>{return a-b});
}else{
return tableau.sort((a,b) =>{return b-a});
}
}
document.write(trie(tableau,"asc"));
