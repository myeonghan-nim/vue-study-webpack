<template>
  <div>
    <h1>MAIN</h1>
    <TodoList category="Shopping"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoList,
  }
}
</script>

<style>
</style>
