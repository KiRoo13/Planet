export const getData = async (url) => {
    try {
       let response = await fetch(url)
       if (!response.ok) {
         throw new Error('Что то пошло не так...')
       }
       let data = await response.json()
       return data
    } catch (e) {
       console.error(e)
    }
}