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
    <div class="toastv">
  <svg class="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
      fill-opacity="1"
    ></path>
  </svg>

  <div class="icon-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      stroke-width="0"
      fill="currentColor"
      stroke="currentColor"
      class="icon"
    >
      <path
        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9ls-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
      ></path>
    </svg>
  </div>
  <div class="message-text-container">
    <p class="sub-text">Something went wrong</p>
    <p class="message-text">Error message</p>
  </div>
</div>
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
    const errorToast = document.querySelector('.toastv');
    const errorText = document.querySelector('.message-text');
    errorText.style.color = "green";
    errorText.textContent = "Login successful!";
    document.querySelector('.sub-text').textContent = "";
    errorToast.classList.add('showv');
    router.push("/home");
  } catch(error) {
    console.error(error.message);
    const errorToast = document.querySelector('.toastv');
    const errorText = document.querySelector('.message-text');
    errorText.style.color = "red";
    errorText.textContent = error.message;
    errorToast.classList.add('showv');
    setTimeout(() => {
  errorToast.classList.remove('showv');
}, 3000);
  }
},
async signup(){
  try{
    if(await this.emailExists(this.email)){
      alert("wrong");
    }else{
      alert('hi')
    }
    const userCredential = await createUserWithEmailAndPassword(auth, this 
    .email, this.password);
    const user = userCredential.user;
    await sendEmailVerification(user);
    const errorToast = document.querySelector('.toastv');
    const errorText = document.querySelector('.message-text');
    errorText.style.color = "green";
    errorText.textContent = "Please Verify your email.";
    document.querySelector('.sub-text').textContent = "";
    errorToast.classList.add('showv');
    setTimeout(() => {
    errorToast.classList.remove('showv');
}, 3000);
    
  }catch(error){
    console.error(error.message);
    const errorToast = document.querySelector('.toastv');
    const errorText = document.querySelector('.message-text');
    errorText.style.color = "red";
    errorText.textContent = error.message;
    errorToast.classList.add('showv');
    setTimeout(() => {
  errorToast.classList.remove('showv');
}, 3000);
  }
},
}
}


const routes = [
  { path: "/", component: Landing },
  { path:"/signin",component:SignIn},
  { path:"/home", component:HomePage},
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

const HomePage = {
  template:`<section class="home">
  </section>`
}


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