<script>
  export default {
    name: 'PageIndex',

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

<template>
  <h1>{{ title }} страница</h1>
</template>

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
