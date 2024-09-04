import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import DashBoard from '../views/DashBoard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Menghilangkan hash di URL
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
});
