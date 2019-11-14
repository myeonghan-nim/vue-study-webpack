<template>
  <div>

    <h1>Root!</h1>

    <!-- 3. use loaded component -->
    <todo-list category="Career"></todo-list>
    <todo-list category="SSAFY"></todo-list>
    <TodoList category="Shopping"/>

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