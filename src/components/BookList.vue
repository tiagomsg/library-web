<template>
  <div class="ui five stackable cards">
    <div class="fluid card" v-for="book in books" :key="book.id">
      <router-link :to="{ name: 'book', params: { bookId: book._id }}">
        <div class="image">
          <img :src="book.imagePath">
        </div>
      </router-link>
      <div class="content">
        <div class="header">{{ book.title | truncate(45) }}</div>
        <div class="meta">
          {{ book.author }}
        </div>
        <div class="description">
          {{ book.description | truncate(100) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import booksService from '../services/BooksService'

export default {
  name: 'BookList',
  data: function () {
    return {
      books: this.getAllBooks()
    }
  },
  methods: {
    getAllBooks () {
      let vm = this
      booksService.getAllBooks()
        .then(booksList => (vm.books = booksList))
    }
  }
}
</script>

<style>
  .image {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image img {
    object-fit: contain;
    max-height: 100%;
  }
  .cards {
    height: 400px;
  }
  div .card {
    overflow: hidden;
  }
</style>
