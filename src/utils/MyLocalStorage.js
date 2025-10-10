export const initLocalStorage = () => {
   return JSON.parse(localStorage.getItem('data')) || {}
}

export const changelocalStorage = (data) => {
   localStorage.setItem('data', JSON.stringify(data))
}