Script.js

import router from './router.js';
const { ref, onMounted } = Vue; // Import Vue 3 functions
const { useIntersectionObserver } = VueUse; // Import VueUse functions

const Loading = {
  template: `  <div class="progress-bar-container">
    <div
      class="progress-bar"
      :style="{ width: progress + '%' }"
    ></div>
  </div>`,
  setup() {
    const progress = ref(0);

    // Function to simulate progress bar
    const startProgress = () => {
      progress.value = 0;
      const interval = setInterval(() => {
        if (progress.value < 100) {
          progress.value += Math.random() * 5; // Adjust the speed of the progress
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    startProgress();
  }
}

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
  mounted() {
    console.log("Main Vue 'App' is *mounted*");
    const isLoading = ref(true);

    // Simulating a delay to mimic page loading using useTimeoutFn
    useTimeoutFn(() => {
      isLoading.value = false; // Stop loading after 3 seconds
    }, 3000); // Replace with actual load condition if needed
  }
});
app.use(router);
app.component('card', Card);
app.component('progressb', Loading)
app.mount('#app');



Router.js



const Landing = {
  template:`
  <section id="landing">
    <main class="main">
      <div class="hero-text">
        <div class="hero-header">
          <img alt="Appspott App logo" src="https://i.imghippo.com/files/UsM9149Od.png" class="hero-header-logo">
          <h2 class="hero-text-header">Appspott</h2>
        </div>
        <p class="hero-text-subtext">
          Discover and download your favorite apps effortlessly with Appspott. Explore a vast collection of apps, updated regularly, and get secure, fast downloads—all in one place. Your app hub starts here!
        </p>
      </div>
      <div class="action-btn">
      <button class="hero-btn">Explore apps now</button>
      </div>
    </main>
    <section class="info">
      <h2 class="info-head-text">Appspott Features</h2>
      <card card-title="Verified & Secure Apps 🔒" card-text="Every app is scanned and verified for security, ensuring a safe download experience." card-img="./images/pm.png"></card>
      <card card-title="Lightning-Fast Downloads 🚀" card-text="Get your favorite apps quickly with optimized download speeds and minimal waiting time." card-img="./images/pm2.png"></card>
      <card card-title="Exclusive & Early Access Apps 🌟" card-text="Discover apps before they hit mainstream stores, including exclusive beta releases." card-img="./images/pm3.png"></card>
    </section>
  </section>`
}
const routes = [
  { path: "/", component: Landing }
];

// Create router instance
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(), // Make sure to reference VueRouter
  routes
});

export default router;



Index.html



<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Appspott</title>
  <link rel="stylesheet" href="./style/style.css">
  <link rel="shortcut icon" href="https://i.imghippo.com/files/UsM9149Od.png"/>
  <script src="https://unpkg.com/vue@3"></script>
  <script src="https://unpkg.com/vue-router@4"></script>
  <script src="https://unpkg.com/@vueuse/shared"></script>

  <script src="https://unpkg.com/@vueuse/core"></script>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@100..900&family=Sora:wght@100..800&display=swap" rel="stylesheet">
</head>

<body>

<div id="app">
  <div v-if="isLoading" class="loading-wrapper">
    <progressb></progressb>
  </div>
  <div v-else>
     <router-view></router-view>
  </div>
</div>
<script src="./script/script.js" type="module">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.3.0/alpine-ie11.js" integrity="sha512-6m6AtgVSg7JzStQBuIpqoVuGPVSAK5Sp/ti6ySu6AjRDa1pX8mIl1TwP9QmKXU+4Mhq/73SzOk6mbNvyj9MPzQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>

</html>