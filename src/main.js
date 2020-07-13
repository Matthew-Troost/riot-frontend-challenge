import Vue from "vue";
import App from "./App.vue";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

import "./assets/styles/index.css";

Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: "https://riot-technical-test-api.herokuapp.com/v1/graphql",
  }),
});

new Vue({
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
