<template>
  <div class="ui vertical stripe segment">
    <div class="ui aligned stackable grid container">
      <div class="row">
        <div class="six wide column">
          <img :src="book.imagePath">
        </div>
        <div class="ten wide right floated column">
          <h3 class="ui header">{{ book.title }}</h3>
          <p><i>by </i>{{book.author}}</p>
          <p>{{ book.description }}</p>
          <p><label><a :href="book.externalLink">Buy</a></label></p>
          <button><router-link :to="{ name: 'book', params: { bookId: book._id }, query: { edit: true }}">Edit</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Book',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
