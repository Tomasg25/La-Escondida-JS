/* let n = parseInt(prompt("ingrese la cantidad de alumnos"))
console.log("cantidad de alumnos "+n)
for( let i = 1;i<=n;i++){
    let nota=parseInt(prompt("ingrese la nota del alumno "+i))
    console.log("La nota del alumno numero "+i+"es de "+nota)
}
 */
/* Ingresar usando una función, los nombres de los vehículos.
b. Pasar los nombres de los vehículos todos a mayúscula. Usar strupr(cad1). Esta función convierte la misma cadena a
mayúscula.
c. Usando una función, copiar en otro vector los nombres de los vehículos Ordenados, alfabéticamente de menor a
mayor. Puedes usar strcmp(cad1,cad2), strcpy(cad1,cad2)
d. Utilizar una función y mostrar el vector ordenado.
e. Utilizar una función y mostrar el vector Original (el que no está ordenado) */

alert("bienvenidos al galpon de Juan!! Un lugar seguro para almacenar autos")
confirm("Le brindamos la tranquilidad de dejar su auto en buenas manos!! Desea confiarnos su auto?")




function ingreso(autos){
    
    for( let i = 1;i<=n;i++){
        const autos = [""]
        autos.push(prompt("ingrese la marca del auto numero "+i))
        console.log(autos)
        
        }
        return ingreso
        

}
let n = parseInt(prompt("ingrese la cantidad de lugares a ocupar en el galpon"))
console.log("lugares reservados: "+n)
console.log(ingreso(n))



