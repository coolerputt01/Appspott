const { ref, onMounted } = Vue;
const { useTimeoutFn,useIntersectionObserver } = VueUse;

  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getDatabase, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8VDvjLIQ4D--3Ss6siuT4dSGXXzU0Kq4",
  authDomain: "t-86e9c.firebaseapp.com",
  projectId: "t-86e9c",
  storageBucket: "t-86e9c.firebasestorage.app",
  messagingSenderId: "528369062614",
  appId: "1:528369062614:web:7aaee6eb51ebac5c96ef77"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


const Landing = {
  template:`
  <section id="landing">
    <main class="main">
      <div class="hero-text">
        <div class="hero-header">
          <img alt="Appspott App logo" src="https://i.imghippo.com/files/UsM9149Od.png" class="hero-header-logo">
          <h1 class="hero-text-header">Appspott</h1>
        </div>
        <p class="hero-text-subtext">
          Discover and download your favorite apps effortlessly with Appspott. Explore a vast collection of apps, updated regularly, and get secure, fast downloads—all in one place. Your app hub starts here!
        </p>
      </div>
      <div class="action-btn">
      <button class="hero-btn" @click="reDirect">Explore apps now</button>
      </div>
    </main>
    <section class="info">
      <h2 class="info-head-text">Appspott Features</h2>
      <card card-title="Verified & Secure Apps 🔒" card-text="Every app is scanned and verified for security, ensuring a safe download experience." card-img="./images/pm.png"></card>
      <card card-title="Lightning-Fast Downloads 🚀" card-text="Get your favorite apps quickly with optimized download speeds and minimal waiting time." card-img="./images/pm2.png"></card>
      <card card-title="Exclusive & Early Access Apps 🌟" card-text="Discover apps before they hit mainstream stores, including exclusive beta releases." card-img="./images/pm3.png"></card>
    </section>
  </section>`,
  methods:{
    reDirect(){
      router.push("/signin");
    }
  }
}
const SignIn = {
  template:`
    <!-- From Uiverse.io by yashasvi9199 --> 
<div class="card">
  <div class="card2">
    <form class="form">
      <p id="heading">Welcome</p>
      <div class="field">
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          class="input-icon"
        >
          <path
            d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
          ></path>
        </svg>
        <input
          type="email"
          class="input-field"
          placeholder="E-mail"
          autocomplete="off"
          v-model="email"
          />
      </div>
      <div class="field">
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          class="input-icon"
        >
          <path
            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
          ></path>
        </svg>
        <input type="password" class="input-field" placeholder="Password" v-model="password"/>
      </div>
      <div class="btn">
        <button class="button1" @click.prevent="login">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button class="button2" @click.prevent="signup">Sign Up</button>
      </div>
    </form>
  </div>
</div>`,
data(){
  return{
  email:"",
  password:"",
  }
},
methods:{
async emailExists(email){
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
},
async login() {
  try {
    await signInWithEmailAndPassword(auth, this.email, this.password);
    alert("Login successful!");
  } catch(error) {
    console.error(error.message);
  }
},
async signup(){
  try{
    if(await this.emailExists(this.email)){
      alert("wrong");
    }else{
    const userCredential = await createUserWithEmailAndPassword(auth, this 
    .email, this.password);
    const user = userCredential.user;
    await sendEmailVerification(user);
    console.log("It works.")
    }
  }catch(error){
    console.error(error.message);
  }
},
}
}


const routes = [
  { path: "/", component: Landing },
  { path:"/signin",component:SignIn},
];

// Create router instance
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});


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
        <div class="cardv" ref="card">
          <div class="card-text">
            <h2 :class="{'card-head': true, 'border-expand': cardIsVisible}">{{cardTitle}}</h2>
            <p class="card-subtext">{{cardText}}</p>
          </div>
          <img :src="cardImg" :class="{'card-img':true,'resize':cardIsVisible}" alt="Appspott Image" title="Appspott Image">
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

const vueApp = Vue.createApp({
  setup() {
    const isLoading = ref(true);

    // Use VueUse timeout to fake a loading delay
    useTimeoutFn(() => {
      isLoading.value = false;
    }, 3000);

    return { isLoading };
  }
});
vueApp.config.compilerOptions.isCustomElement = tag => tag === 'dotlottie-player';
vueApp.use(router);
vueApp.component('card', Card);
vueApp.component('progressbar', Loading);
vueApp.mount('#app');