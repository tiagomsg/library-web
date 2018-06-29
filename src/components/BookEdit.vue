<template>
  <div class="ui vertical stripe segment">
    <div class="ui aligned stackable grid container">
      <div class="row">
        <div v-if="book.imagePath" class="six wide column">
          <img :src="book.imagePath">
        </div>
        <div v-else class="six wide column">
          <i class="window plus square"></i>
        </div>
        <div class="ten wide right floated column">
          <p>Editing...</p>
          <h3 class="ui header">{{ book.title }}</h3>
          <p><i>by </i>{{book.author}}</p>
          <p>{{ book.description }}</p>
          <p><label><a :href="book.externalLink">Buy</a></label></p>
          <button @click="updateBook">Confirm Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
// import booksService from '../services/BooksService'

export default {
  name: 'BookEdit',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateBook () {
      this.$emit('bookUpdated', this.book)
    }
  }
}
</script>

<style>
</style>
