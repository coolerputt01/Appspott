<script setup>
import { ref, onMounted } from "vue";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD8VDvjLIQ4D--3Ss6siuT4dSGXXzU0Kq4",
  authDomain: "t-86e9c.firebaseapp.com",
  projectId: "t-86e9c",
  storageBucket: "t-86e9c.firebasestorage.app",
  messagingSenderId: "528369062614",
  appId: "1:528369062614:web:7aaee6eb51ebac5c96ef77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Vue state
const username = ref("");
const password = ref("");

// Login function
const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, username.value, password.value);
    alert("Login successful!");
  } catch (error) {
    alert(error.message);
  }
};

// Signup function
const signup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, username.value, password.value);
    alert("Account created successfully!");
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div class="card">
    <div class="card2">
      <form class="form" @submit.prevent="login">
        <p id="heading">Welcome</p>
        <div class="field">
          <input type="text" class="input-field" placeholder="Username" autocomplete="off" v-model="username" />
        </div>
        <div class="field">
          <input type="password" class="input-field" placeholder="Password" v-model="password" />
        </div>
        <div class="btn">
          <button type="submit" class="button1">Login</button>
          <button type="button" class="button2" @click="signup">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>