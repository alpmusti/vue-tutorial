<template>
  <div class="user-item">
    <p>
      <router-link :to="profileLink">
        {{user.name}} <br/>
        @{{user.username}}
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    profileLink() {
      return `user/${this.user.id}`;
    },
  },
};
</script>

<style>
.user-item{
    border: 1px solid #ccc;
    padding: 12px 24px;
    display: inline-table;
    margin: 5px;
    width: 175px;
    height: 150px;
}
.user-item p{
  display: table-cell;
  vertical-align: middle;
}
</style>
