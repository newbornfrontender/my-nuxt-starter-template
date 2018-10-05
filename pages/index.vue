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
