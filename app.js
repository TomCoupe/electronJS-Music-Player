require('./bootstrap');
window.Vue = require('vue');

Vue.component('tester', require('./components/Tester.vue').default);

const app = new Vue({
    el: '.main',
});