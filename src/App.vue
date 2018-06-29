<template>
  <div id="app">
    <header class="header">
      <h1>AND Library</h1>
      <Menu></Menu>
    </header>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import BookList from './components/BookList'

export default {
  components: {Menu, BookList},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
div .content {
  padding: 10px;
}
</style>
