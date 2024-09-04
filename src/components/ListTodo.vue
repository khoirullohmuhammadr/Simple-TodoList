<template>
  <div style="margin-top:3em;">
    <div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
          <div class="row">
            <div class="col">
              <span :class="{ 'text-decoration-line-through': todo.isDone }">{{ todo.activity }}</span>
            </div>
            <div class="col-auto">
              <button @click="toggleDone(index)" class="btn btn-primary">
                {{ todo.isDone ? 'Cancel' : 'Finished' }}
              </button>
            </div>
            <div class="col-auto">
              <button @click="deleteTODO(index)" class="btn btn-danger">X</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteTODO(index) {
      this.$emit('deleteTodo', index);
    },
    toggleDone(index) {
      if (this.todos[index].isDone) {
        this.$emit('cancelTodo', index);
      } else {
        this.$emit('doneTodo', index);
      }
    }
  },
};
</script>
