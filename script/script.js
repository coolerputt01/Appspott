import router from './router.js';
const { ref, onMounted } = Vue; // Import Vue 3 functions
const { useIntersectionObserver } = VueUse; // Import VueUse functions
const Card = {
      template: `
        <div class="card" ref="card">
          <div class="card-text">
            <h2 :class="{'card-head': true, 'border-expand': cardIsVisible}">Verified & Secure Apps 🔒</h2>
            <p class="card-subtext">Every app is scanned and verified for security, ensuring a safe download experience.</p>
          </div>
          <img src="./images/phonemockup.png" :class="{'card-img':true,'resize':cardIsVisible}">
        </div>
      `,
      setup() {
        const card = ref(null);
        const cardIsVisible = ref(false);

        useIntersectionObserver(
          card,
          ([entry]) => {
            cardIsVisible.value = entry.isIntersecting;
          }
        );

        return { card, cardIsVisible };
      },
    };
const app = Vue.createApp({
  mounted(){
    console.log("Main Vue 'App' is *mounted*");
  }
});
app.use(router);
app.component('card',Card);
app.mount('#app');