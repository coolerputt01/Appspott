const Card = {
  template:`
     <div class="card">
      <div class="card-text">
        <h2 class="card-head">Verified & Secure Apps 🔒</h2>
        <p class="card-subtext">Every app is scanned and verified for security, ensuring a safe download experience.</p>
        </div>
        <img src="./images/phonemockup.png" class="card-img">
      </div>
  `
}

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
     <card></card>
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