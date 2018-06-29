import axios from 'Axios'

export default {
  getAllBooks () {
    return axios.get('/books')
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },

  getBookById (bookId) {
    return axios.get(`/books/${bookId}`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
        return null
      })
  },

  createBook (bookTitle) {
    return axios.post(`/books`, {
      title: bookTitle
    })
      .then(response => {
        return response.data._id
      })
      .catch(error => {
        console.log(error)
        return null
      })
  },

  updateBook (book) {
    return axios.put(`/books/${book._id}`, book)
      .then(response => {
        return response.data._id
      })
      .catch(error => {
        console.log(error)
        return null
      })
  }
}
