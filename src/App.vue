<template>
  <div id="app">
    <!-- <Addtodo @add-todo="handleAddTodo" /> -->
    <Addtodo :todos="todos" @add-todo="handleAddTodo" @delete-todo="handleDeleteTodo" @complete-todo="handleCompleteTodo" @incomplete="toggleComplete" @clear-completed="handleClearCompleted" @clear-all ="handleClearAll"/>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import Addtodo from './components/AddTodo.vue'
// import TodoList from './components/TodoList.vue'

const todos = ref([
  // {
  //   id: 1,
  //   task: 'Test',
  // },
])
// addTodo觸發後的fc
const handleAddTodo = (todo) => {
  todos.value.push(todo)
}
const handleDeleteTodo = (todoId) => {
  todos.value = todos.value.filter((todo) => todo.id !== todoId)
}
const handleCompleteTodo = (todoId) => {
  todos.value = todos.value.map((todo) =>
    todo.id === todoId ? { ...todo, complete: !todo.complete } : todo,
  )
}
// 切換完成狀態的函數
const toggleComplete = (id) => {
  const todo = todos.value.find(todo => todo.id === id);
  if (todo) {
    todo.complete = !todo.complete;
  }
}
// 新增清除已完成的方法
const handleClearCompleted =()=>{
  todos.value = todos.value.filter(todo=> !todo.complete)
}

// 新增清除全部的方法
const handleClearAll = () => {
  todos.value = []
}
</script>
