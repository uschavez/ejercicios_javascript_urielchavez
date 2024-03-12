let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

/* Punto 1: Se imprimen todos los nombres en la lista */
console.log("Todos los nombres en la lista: " + personas.join(", "));

/* Punto 2: Se elimina a Dani del arreglo */
let sinDani = personas.filter(persona => persona !== "Dani");
console.log("Grupo sin Dani: " + sinDani.join(", "));

/* Punto 3: Se elimina a Juan del arreglo */
let sinJuan = sinDani.filter(persona => persona !== "Juan");
console.log("Grupo sin Juan: " + sinJuan.join(", "));

/* Punto 4: Se mueve a Luis al frente del arreglo */
let indexLuis = sinJuan.indexOf("Luis");
if (indexLuis !== -1) {
  sinJuan.splice(indexLuis, 1); // Elimina a Luis de la posición original
  sinJuan.unshift("Luis"); // Agrega a Luis al frente
}
console.log("Grupo con Luis al frente: " + sinJuan.join(", "));

/* Punto 5: Se agrega mi nombre al final del arreglo */
let miNombre = "Uriel";
sinJuan.push(miNombre);
console.log("Grupo con " + miNombre + " al final: " + sinJuan.join(", "));

/* Punto 6: Se realiza un bucle para iterar y salir después de imprimir Maria */
for (let i = 0; i < sinJuan.length; i++) {
  console.log(sinJuan[i]);
  if (sinJuan[i] === "Maria") {
    break;
  }
}

/* Punto 7: Se obtiene el "indexOf" de Maria */
let mariaIndex = sinJuan.indexOf("Maria");
console.log("Index of Maria: " + mariaIndex);

// Punto 8: Al final del ejercicio, debería haber 4 personas en el arreglo
console.log("Arreglo final: " + sinJuan.join(", "));
