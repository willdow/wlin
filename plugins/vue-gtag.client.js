import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  useRuntimeConfig();
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: import.meta.env.VITE_GOOGLE_ANALYTICS_ID
    }
  });
});
