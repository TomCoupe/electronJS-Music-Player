// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

// require('./bootstrap');
window.Vue = require('vue');

Vue.component('tester', require('./components/Tester.vue').default);

const app = new Vue({
    el: '.main',
});