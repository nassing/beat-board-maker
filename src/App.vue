<script setup>
import MenuSelector from './components/MenuSelector.vue'
import Board from './components/Board.vue'
import PAGE from './components/enums/PageEnum.js'

const CURRENT_PAGE = ref(PAGE.BUILD)
</script>

<template>
  <main>
    <MenuSelector/>
    <Board/>
  </main>
  <footer>
    <p>Made by <a href="https://nassing.tk">nassing</a></p>
  </footer>
</template>

<style scoped>

</style>
