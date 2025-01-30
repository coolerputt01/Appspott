const Landing = {
  template:`<section id="landing">
  <h2>Landing</h2>
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