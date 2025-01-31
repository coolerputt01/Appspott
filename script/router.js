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
      <card card-title="Verified & Secure Apps 🔒" card-text="Every app is scanned and verified for security, ensuring a safe download experience." card-img="./images/phonemockup.png"></card>
      <card card-title="Lightning-Fast Downloads 🚀" card-text="Get your favorite apps quickly with optimized download speeds and minimal waiting time." card-img="./images/pm2.png"></card>
      <card card-title="Verified & Secure Apps 🔒" card-text="Every app is scanned and verified for security, ensuring a safe download experience." card-img="./images/pm.png"></card>
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