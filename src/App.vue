<template>
  <div>

    <h1>here is root!</h1>

    <!-- 3. use loaded component -->
    <todo-list category="SSAFY"></todo-list>
    <TodoList category="Shopping"/>
    <todo-list category="Career"></todo-list>

  </div>
</template>

<script>
// 1. load component
import TodoList from './components/TodoList.vue'

export default {
  // 2. add component
  components: {
    TodoList,
  }
}
</script>

<style>

</style>