<template>
  <div>
    <router-link :to="goBack">&larr; Back</router-link>
    <div v-for="post in userPosts" :key="post.id" class="post-item">
      <h4>{{post.title}}</h4>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import HttpBaseService from '@/services/HttpBaseService';

export default {
  name: 'UserPosts',
  data() {
    return {
      userPosts: [],
      service: new HttpBaseService(),
    };
  },
  created() {
    this.service.get(`posts?userId=${this.$route.params.userId}`)
      .then((data) => {
        this.userPosts = data;
      });
  },
  computed: {
    goBack() {
      return `/user/${this.$route.params.userId}`;
    },
  },
};
</script>

<style scoped>
  .post-item{
    border-bottom: 1px solid #ccc;
  }
  .post-item:last-child{
    border-bottom: none;
  }
</style>
