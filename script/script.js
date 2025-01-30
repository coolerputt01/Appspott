import {router,Card}from './router.js';

const app = Vue.createApp({
  mounted(){
    console.log("Main Vue 'App' is *mounted*");
  }
});
app.use(router);
app.component('card',Card);
app.mount('#app');