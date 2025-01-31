import router from './router.js';
const { ref, onMounted } = Vue; // Import Vue 3 functions
const { useIntersectionObserver } = VueUse; // Import VueUse functions
const Card = {
      template: `
        <div class="card" ref="card">
          <div class="card-text">
            <h2 :class="{'card-head': true, 'border-expand': cardIsVisible}">{{cardTitle}}</h2>
            <p class="card-subtext">{{cardText}}</p>
          </div>
          <img :src="cardImg" :class="{'card-img':true,'resize':cardIsVisible}">
        </div>
      `,
      props:{
        cardTitle:{
          type:String,
          required:true,
        },
        cardText:{
          type: String,
          required: true,
        },
        cardImg:{
          type:String,
          required:true,
        }
      },
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