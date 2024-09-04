<template>
     <div class="dropdown">
    <button class="btn btn-warning dropdown-toggle" type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Sort by:
    </button>
    <ul class="dropdown-menu" aria-labelledby="sortDropdown">
      <li><a class="dropdown-item" href="#" @click="sortBy('Terbaru')">Terbaru</a></li>
      <li><a class="dropdown-item" href="#" @click="sortBy('Selesai')">Selesai</a></li>
      <li><a class="dropdown-item" href="#" @click="sortBy('Belum Selesai')">Belum Selesai</a></li>
      <li><a class="dropdown-item" href="#" @click="sortBy('semua')">Semua</a></li>
    </ul>
  </div>
</template>

<script>
export default{
    methods: {
  // ... other methods ...

  sortBy(option) {
    switch (option) {
      case 'Terbaru':
        this.todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'Selesai':
        this.todos = this.todos.filter(todo => todo.isDone);
        break;
      case 'Belum Selesai':
        this.todos = this.todos.filter(todo => !todo.isDone);
        break;
      case 'semua':
        // No specific sorti ng, show all todos
        break;
      default:
        // Handle any other cases if needed
        break;
    }
    this.saveTodos();
  },

  // ... other methods ...
}

}
</script>