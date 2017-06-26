var Vue = require('vue/dist/vue.common.js');
var VueAuthImage = require('../vue-auth-image');

var vue = new Vue();
vue.use(VueAuthImage);

new Vue({
  el: 'div'
});
