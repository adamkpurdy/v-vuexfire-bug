import Vue from 'vue'
import App from './App.vue'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDg75VnXtWV5ih20zRV57qQEwtCyrN-j54',
  authDomain: 'q-vuex-fire-bug.firebaseapp.com',
  projectId: 'q-vuex-fire-bug',
  storageBucket: 'q-vuex-fire-bug.appspot.com',
  messagingSenderId: '773150747505',
  appId: '1:773150747505:web:5d75dea067d4519ebaa4d0'
}

firebase.initializeApp(config)

// store.dispatch('users/getCurrentUser')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
