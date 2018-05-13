/* eslint-disable */
<template>
<div>
    <ul>
        <li
            v-for="gif in gifs"
           :key="gif.id">
            <img :src="gif.images.fixed_height.url" />
        </li>
    </ul>
</div>
</template>


<script>
export default {
  props: ['gifs'],
};
</script>

<style>
li{
    list-style-type: none;
    float: left;
    margin: 20px;
}
</style>
