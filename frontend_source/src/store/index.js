import Vue from 'vue'
import Vuex from 'vuex'
import todos from "./modules/todos";
import jwt from "./modules/jwt";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jwt,
    todos,
  }
})


