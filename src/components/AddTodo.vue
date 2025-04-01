<template>
  <div class="container">
    <div class="task">
      <div class="title">
        <h1>TODO LIST</h1>
      </div>
      <div class="form">
        <form id="form" @submit.prevent="onSubmit">
          <input v-model="task" type="text" placeholder="NEW TASK..." />
          <button><i class="btn-plus fa-solid fa-plus"></i></button>
        </form>
      </div>
      <!-- 在輸入框下方顯示 todos 列表 -->
      <div class="todoList">
        <ul>
          <li class="todo-item" v-for="todo in todos" :key="todo.id">
            <button>
              <i class="btn-complete fa-regular fa-circle" @click="completeTodo(todo.id)"></i>
            </button>
            <p @click="$emit('completeTodo', todo.id)" :class="{ 'line-through': todo.complete }">
              {{ todo.task }}
            </p>
            <button>
              <i class="btn-delete fa-regular fa-trash-can" @click="deleteTodo(todo.id)"></i>
            </button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtn">
        <button @click="ClearCompleted">Clear Completed</button>
        <button @click="ClearAll">Clear All</button>
      </div>
      <!-- pendingTasks -->
      <div class="pendingTasks">
        <span class="pending"
          >Pending Tasks: {{ incomplete === 0 ? `No Peding Task` : `${incomplete}` }}</span
        >
      </div>
    </div>
  </div>
</template>

=
<script setup>
import { ref, defineEmits, defineProps, computed } from 'vue'
// 接收來自 App.vue 的 todos
// 接收來自 App.vue 的 props
const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['deleteTodo', 'completeTodo', 'addTodo', 'ClearCompleted', 'ClearAll'])
const deleteTodo = (todoId) => {
  emit('deleteTodo', todoId)
}
const completeTodo = (todoId) => {
  emit('completeTodo', todoId)
}
// 接收新的值
const task = ref('')

// 取值
const onSubmit = () => {
  if (!task.value.trim()) return
  const todo = {
    id: crypto.randomUUID(),
    task: task.value, // 修正 key 名稱
    complete: false,
  }
  emit('addTodo', todo) // 發送完整的 todo 物件
  task.value = '' // 清空輸入欄
}

// 使用 computed 來計算未完成的任務數量
const incomplete = computed(() => {
  return props.todos.filter((todo) => !todo.complete).length
  // 正確過濾：filter(todo => !todo.complete) 會返回所有未完成的任務
})
const ClearCompleted = () => {
  emit('clearCompleted') // 發送清除已完成事件
}
const ClearAll = () => {
  emit('clearAll')  // 發送清除全部事件
}
</script>
