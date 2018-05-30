import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import success from '@/components/success';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/auth/github',
      name: 'success',
      component: success,
    },
    {
      path: '/auth/google',
      name: 'success',
      component: success,
    },
  ],
});
