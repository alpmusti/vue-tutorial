<template>
  <div>
    <h2>Users List</h2>
    <template v-for="user in users">
      <user-item :user=user :key=user.id></user-item>
    </template>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem';
import HttpClient from '@/services/HttpBaseService';

export default {
  name: 'home',
  data() {
    return {
      users: [],
      service: new HttpClient(),
    };
  },
  created() {
    this.service.get('users')
      .then((data) => {
        this.users = data;
      });
  },
  components: { UserItem },
};
</script>
