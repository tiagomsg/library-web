<template>
  <div class="ui secondary pointing menu">
    <div class="item">
      <router-link to="/books">Books</router-link>
    </div>
    <div class="item">
      <router-link to="/about">About</router-link>
    </div>
    <div class="item">
      <div @click="newBookShow = !newBookShow" v-if="!newBookShow" class="compact ui primary button">New Book</div>
      <div v-if="newBookShow" class="ui left corner labeled action input">
        <input v-model="bookTitle" type="text" placeholder="Title...">
        <button @click="createBook" class="ui button">Create</button>
        <div @click="newBookShow = !newBookShow" class="ui left corner label">
          <i class="window close icon"></i>
        </div>
      </div>
    </div>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search books...">
          <i class="search icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import booksService from '../services/BooksService'

export default {
  name: 'Menu',
  data: function () {
    return {
      newBookShow: false,
      bookTitle: ''
    }
  },
  methods: {
    createBook: function () {
      if (this.bookTitle) {
        let vm = this
        let router = this.$router
        booksService.createBook(vm.bookTitle)
          .then(bookId => {
            console.log(`BOOK: ${bookId}`)
            router.go(`/books/${bookId}?edit=true`)
          })
      }
    }
  }
}
</script>

<style>
  .item {
    height: 40px;
  }
</style>
