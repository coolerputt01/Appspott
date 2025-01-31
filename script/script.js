import router from './router.js';
const { ref, onMounted } = Vue;
const { useTimeoutFn,useIntersectionObserver } = VueUse;

const Loading = {
  template: `  
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>`,
  setup() {
    const progress = ref(0);

    // Function to simulate progress bar
    const startProgress = () => {
      progress.value = 0;
      const interval = setInterval(() => {
        if (progress.value < 100) {
          progress.value += Math.random() * 5; // Adjust speed
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    startProgress();
    return { progress }; // ✅ Return progress so Vue tracks it
  }
};

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
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
    cardText: {
      type: String,
      required: true,
    },
    cardImg: {
      type: String,
      required: true,
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
  setup() {
    const isLoading = ref(true);

    // Use VueUse timeout to fake a loading delay
    useTimeoutFn(() => {
      isLoading.value = false;
    }, 3000);

    return { isLoading };
  }
});

app.use(router);
app.component('card', Card);
app.component('progressbar', Loading);
app.mount('#app');