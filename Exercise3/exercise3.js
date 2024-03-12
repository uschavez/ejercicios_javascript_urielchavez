let numeros = [1, 2, 3, 4];
let suma = numeros.reduce((acc, num) => acc + num, 0);
let producto = numeros.reduce((acc, num) => acc * num, 1);
console.log(suma);
console.log(producto);