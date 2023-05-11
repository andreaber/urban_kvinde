const usuarios = [
  {
    id: 1,
    nombre: 'Pablo',
    grado: 4,
    seccion: 'B'
  },
  {
    id: 2,
    nombre: 'Alan',
    grado: 4,
    seccion: 'A'
  },
  {
    id: 3,
    nombre: 'Valentina',
    grado: 4,
    seccion: 'B'
  },
  {
    id: 4,
    nombre: 'Sandra',
    grado: 4,
    seccion: 'C'
  },
  {
    id: 5,
    nombre: 'Uriel',
    grado: 4,
    seccion: 'C'
  }
]

/*
const resultado = usuarios.forEach( (el) => console.log(el) )

$ node polifill.js 
{ id: 1, nombre: 'Pablo', grado: 4, 'sección': 'B' }
{ id: 2, nombre: 'Alan', grado: 4, 'sección': 'B' }
{ id: 3, nombre: 'Valentina', grado: 4, 'sección': 'B' }
{ id: 4, nombre: 'Sandra', grado: 4, 'sección': 'B' }
{ id: 5, nombre: 'Uriel', grado: 4, 'sección': 'B' }
*/

// const resultado = usuarios.find( (el) => el.id === 5 )
// console.log(resultado)

function encontrar(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i]

    if (fn(current) === true) {
      return current
    }
  }
}

const resultado = encontrar(usuarios, (el) => el.seccion === 'C')

console.log(resultado)


// FALSY: false, null, undefined, o, '', NaN   (son false)