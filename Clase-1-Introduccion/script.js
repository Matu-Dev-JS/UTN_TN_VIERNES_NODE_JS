//Importamos FileSystem
//Que hace? Podemos manejar archivos (leer, crear, eliminar)
const filesystem = require('fs')


//Glosario: 
// -Promise: Objeto de JS que representa una operacion asincrona
//async / await 

/* async function funcionAsincronicaEjemplo (){
    await filesystem.promises.writeFile('test.txt', `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem optio iure necessitatibus, natus, quasi, quia repellat aspernatur eum enim labore laborum qui dicta repudiandae esse ab facere nihil quibusdam do`, {encoding: 'utf-8'})
    const resultado = await filesystem.promises.readFile('test.txt', {encoding: 'utf-8'})

    console.log("resultado: ", resultado)
}

funcionAsincronicaEjemplo()
console.log('El dia de hoy es viernes')
console.log('me gusta mucho el helado de menta granizada')
console.log('Viva el futbol')

 */






/* 
Hay operaciones que requieren de ciertos procesos que pueden hacerse en 'paralelo' al nuestro, 
ejemplo:
Tengo una aplicacion web y quiero cargarla, para ello busco la lista de productos, pero mientras eso se resuelve podriamos ir cargando el footer
Solucion: 
buscarProductos es una operacion asincronica ya que tiene una menor prioridad para resolverse al necesitar de 3eros
*/

/* 
Quiero cocinar, tengo 1 hornalla y 2 cocineros

Cola de procesos asincronicos:  


Hornalla: 
Cocinero 1:
Cocinero 2:

Resuelto: 
-picar cebolla (requiere de un cocinero)
-picar carne (requiere de un cocinero) (2s)
-picar ajo (requiere de un cocinero)
-cocinar carne (requiere de un cocinero, 1 hornalla y de carne picada) (min 2s)
*/

/* let from = 'node.js'
//Creamos un archivo de texto de forma sincronica
filesystem.writeFileSync('hola.txt', `Hola mundo desde ${from}`, { encoding: 'utf8' })

//Leemos un archivo de .txt
const texto = filesystem.readFileSync('hola.txt', {encoding: 'utf-8'})
console.log('contenido: ', texto) */

/*
Practica: 
Crear 2 variables numericas (numero_1 y numero_2)
Guardar en un archivo .txt cada numero
Leer ambos archivos y sumar los valores
Mostrar el resultado por consola
*/
let numero_1 = 1
let numero_2 = 2

const FILENAMES = {
    NUMERO_1: 'numero_1',
    NUMERO_2: 'numero_2'
}

filesystem.writeFileSync(`${FILENAMES.NUMERO_1}.txt` , String(numero_1), {encoding: 'utf-8'})
filesystem.writeFileSync(`${FILENAMES.NUMERO_2}.txt`, String(numero_2), {encoding: 'utf-8'})


const numero_1_valor = filesystem.readFileSync(`${FILENAMES.NUMERO_1}.txt`, {encoding: 'utf-8'})
const numero_2_valor = filesystem.readFileSync(`${FILENAMES.NUMERO_2}.txt`, {encoding: 'utf-8'})
console.log(`Resultado de: ${numero_1_valor} + ${numero_2_valor} = ${Number(numero_1_valor) + Number(numero_2_valor)}`)

console.log('Operacion simple')