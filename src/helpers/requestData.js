import MOCK_DATA from '../data/MOCK_DATA.json'

const requestData = () => {
  return new Promise((resolve, reject) => {
    // cuerpo de la promesa
    setTimeout(() => {
      //if (bool) {
        resolve(MOCK_DATA)
      // } else {
      //   reject('Promesa rechazada')
      // } 
    }, 1500)
  })
}

export default requestData