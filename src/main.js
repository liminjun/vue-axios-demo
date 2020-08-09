import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
import * as firebase from "firebase/app";
import "firebase/auth";

axios.defaults.baseURL = 'https://vuejs-http-demo-1b3c3.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

var firebaseConfig = {
  apiKey: "AIzaSyDohFsvw8xJJnVP9EgwvG4qzTIPknQTtNs",
  authDomain: "vuejs-http-demo-1b3c3.firebaseapp.com",
  databaseURL: "https://vuejs-http-demo-1b3c3.firebaseio.com",
  projectId: "vuejs-http-demo-1b3c3",
  storageBucket: "vuejs-http-demo-1b3c3.appspot.com",
  messagingSenderId: "193565949028",
  appId: "1:193565949028:web:03d0bb4011a4b0e8d23371",
  measurementId: "G-QVBCSZRDY7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
