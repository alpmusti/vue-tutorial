<template>
  <div>
    <router-link to="/">&larr; Back</router-link>
    <h1>{{userData.name}}</h1>
    <ul>
      <li>{{userData.phone}}</li>
      <li>{{userData.email}}</li>
      <li>{{userData.website}}</li>
    </ul>

    <router-link :to="postsLink">Posts</router-link>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      userData: [],
    };
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
      .then(res => res.json())
      .then((data) => {
        this.userData = data;
      });
  },
  computed: {
    postsLink() {
      return `/user/${this.$route.params.id}/posts`;
    },
  },
};
</script>
