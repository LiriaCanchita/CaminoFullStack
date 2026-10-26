//Ejercicio 1
const titulo = document.querySelector('#titulo') 
const buscar = document.querySelector('#buscador')
const tercer = document.querySelector('.parque')

titulo.textContent = "Mis lugares para leer"
buscar.placeholder = 'ingresa busqueda'
console.log(tercer.getAttribute('data-tipo'))


//Ejercicio 2
const destacado= document.querySelectorAll(".lugar.favorito")
const oculto = document.querySelector('.parque')

destacado.forEach(destacado=>{destacado.classList.add('destacado')})
oculto.classList.add("oculto")
//creo que seguira con la clase oculto
oculto.classList.toggle("oculto")
oculto.classList.toggle("oculto")


//Ejercicio 3
const nuevaLi = document.createElement('li')
nuevaLi.textContent = 'Biblioteca Municipal'
nuevaLi.classList.add('lugar', 'libreria')
nuevaLi.setAttribute('data-tipo', 'libreria')
lista.appendChild(nuevaLi)

const primero = document.querySelector('.lugar')
const otraLi = document.createElement('li')
otraLi.textContent= 'Cafe Aurora'
lista.insertBefore(otraLi, primero)


//Ejercicio 4
const enlista = document.querySelector('#lista')
const ultimo = enlista.querySelector('li:last-of-type')

if(ultimo){
    ultimo.remove()
}else{
    console.log("no existe")
}

