let arregloNumeros = [3, 6, 12, 5, 100, 1]; 

function algoritmobubble(a,b){
    if (a<b){
        return -1 ; 
    }else if ( a > b ) { 
        return 1; 
    } else {
        return 0;
    } 
}
function ordenamiento ( a, b){
    return a-b;
}
console.log(arregloNumeros.sort(ordenamiento)); 