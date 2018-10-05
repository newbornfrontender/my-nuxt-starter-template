<template>
  <h1>{{ title }} страница</h1>
</template>

<script>
  export default {
    name: 'page-index',

    data: () => ({
      title: 'Главная',
    }),

    head () { return {
      title: this.title,
      meta: [{
        hid: 'index-description',
        name: 'description',
        content: `${this.title} - описание`,
      }],
    }},
  };
</script>

<style>
  html {
    margin: 0;
  }
</style>

<style scoped>
  h1 {
    color: red;
  }
</style>
