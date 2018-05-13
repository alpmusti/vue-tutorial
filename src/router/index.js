import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import UserProfile from '@/components/UserProfile';
import UserPosts from '@/components/UserPosts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/:id',
      name: 'userId',
      component: UserProfile,
    },
    {
      path: '/user/:userId/posts',
      name: 'userPosts',
      component: UserPosts,
    },
  ],
  mode: 'history',
});
