<template>
  <div>

    <h1>here is root!</h1>

    <todo-list></todo-list>
    <todo-list></todo-list>
    <todo-list></todo-list>
    
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