<script>
import ListTodo from './components/ListTodo.vue';
// eslint-disable-next-line no-unused-vars
import DropDown from './components/DropDown.vue';

export default {
  components: { ListTodo },
  data() {
    return {
      todo: "",
      todos: []
    }
  },
  computed: {
    totalTODO() {
      return this.todos.length;
    }
  },
  methods: {
    add() {
      if (this.todo.trim()) {
        const newTodo = {
          activity: this.todo.trim(),
          isDone: false,
          createdAt: new Date().toISOString()
        };
        this.todos.push(newTodo);
        this.todo = "";
        this.saveTodos();
      }
    },
    deleteTodo(todoIndex) {
      this.todos.splice(todoIndex, 1);
      this.saveTodos();
    },
    doneTodo(todoIndex) {
      this.todos[todoIndex].isDone = true;
      this.saveTodos();
    },
    cancelTodo(todoIndex) {
      this.todos[todoIndex].isDone = false;
      this.saveTodos();
    },
    sortNewestFirst() {
      this.todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      this.saveTodos();
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadTodos() {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
    }
  },
  created() {
    this.loadTodos();
  }
};
</script>


<template>
  <div class="container" style="margin-top:20px;">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">SIMPLE TODO APP</h5>
        <small>Todos Total: {{ totalTODO }}</small>
        <div class="row">
          <div class="col-10">
            <input v-model="todo" type="text" class="form-control" @keyup.enter="add">
          </div>
          <div class="col-2">
            <button class="btn btn-success" @click="add">Tambah List</button>
           <DropDown/>
          </div>
        </div>
        <ListTodo :todos="todos" @deleteTodo="deleteTodo" @doneTodo="doneTodo" @cancelTodo="cancelTodo"/>
      </div>
    </div>
  </div>
</template>


