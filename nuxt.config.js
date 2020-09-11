import theme from "@nuxt/content-theme-docs";

export default theme({
  loading: { color: "#ff4785" },
  router: {
    base: process.env.DEPLOY_ENV === "GH_PAGES" ? "/cop4053-website" : "/"
  }
});
