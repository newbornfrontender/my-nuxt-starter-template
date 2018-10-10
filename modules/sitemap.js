export default {
  modules: ['@nuxtjs/sitemap'],

  sitemap: {
    hostname: 'https://example.com',
    generate: true,
    routes: ['/'],
  },
};
