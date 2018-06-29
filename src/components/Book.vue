<template>
  <div>
    <div v-if="book">
      <div v-if="edit">
        <book-edit :book="book" @bookUpdated="updateBook($event)"></book-edit>
      </div>
      <div v-else>
        <book-details :book="book"></book-details>
      </div>
    </div>
    <div v-else class="row">
      <h3>Book {{ bookId }} not found!</h3>
    </div>
  </div>
</template>

<script type="text/javascript">
import BooksService from '../services/BooksService'
import BookDetails from './BookDetails'
import BookEdit from './BookEdit'

export default {
  name: 'Book',
  props: {
    bookId: {
      type: String,
      required: true
    },
    edit: Boolean
  },
  components: {
    bookDetails: BookDetails,
    bookEdit: BookEdit
  },
  data: function () {
    return {
      book: {}
    }
  },
  created: function () {
    this.loadBook()
  },
  methods: {
    loadBook () {
      let vm = this
      BooksService.getBookById(this.bookId)
        .then(book => (vm.book = book))
    },
    updateBook (updatedBook) {
      // let vm = this
      this.book = updatedBook
      this.$router.push({name: 'book', params: { bookId: this.book._id }})
      // TODO
      // BooksService.updateBook(this.book)
      //   .then((id) => {
      //     vm.edit = false
      //   })
    }
  }
}
</script>

<style>
</style>
