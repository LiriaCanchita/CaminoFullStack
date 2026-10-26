//EJERCICIO 1
//selecciona cada uno como en css
const titulo = document.querySelector('#titulo') 
const lista = document.querySelector("#lista-lugares")
const boton = document.querySelector("#btn-agregar")
console.log(titulo)

//EJERCICIO 2
//seleccionamos la clase lugar
const lugares = document.querySelectorAll(".lugar")

//veo cada uno de los li, los imprimo y aumento el numero
lugares.forEach( (li, i) => {
  console.log(`${i + 1}: ${li.textContent}`)
})

//EJERCICIO 3
const favoritos = document.querySelectorAll(".lugar.favorito")
const cafeterias = document.getElementById("[id=`btn-agregar`")
const cafeteriaFavorita = document.querySelectorAll(".cafeteria.favorito")
const buscador = document.querySelector("input[type='text']")

//EJERCICIO 4
const footer = document.querySelector('#footer')
if(footer){
  console.log("Se encontro")
}else{
  console.log("No se encontro el elemento")
}


