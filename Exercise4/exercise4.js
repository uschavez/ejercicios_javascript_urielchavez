let clases1 = ['Math', 'English', 'Programming'];
let clases2 = ['Geography', 'Spanish', 'Programming'];

let traslapeMaterias = clases1.filter((cursos) => clases2.includes(cursos)); 
console.log("Materias traslapadas: " + traslapeMaterias);  
 