import Vue from "vue";
import App from "./App.vue";
import Router from "@/router/router";
import store from "./vuex/store";
import 'material-design-icons-iconfont'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: store,
  router: Router,
}).$mount("#app");
