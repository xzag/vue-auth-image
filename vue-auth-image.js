;(function () {
  var vueAuthImage = {};
  var axios = typeof require === 'function'
  ? require('axios')
  : window.Axios;

  if (!axios) {
    throw new Error('[vue-auth-image] cannot locate Axios');
  }

  vueAuthImage.install = function(Vue) {
    Vue.directive('auth-image', {
      bind: function(el, binding) {
        var imageUrl = binding.value;
        axios({
          method: 'get',
          url: imageUrl,
          responseType: 'arraybuffer'
        })
        .then(function(resp) {
          var mimeType = resp.headers['content-type'].toLowerCase();
          var imgBase64 = new Buffer(resp.data, 'binary').toString('base64');
          el.src = 'data:' + mimeType + ';base64,' + imgBase64;
        });
      }
    });
  };

  if (typeof exports == 'object') {
    module.exports = vueAuthImage;
  } else if (typeof define == 'function' && define.amd) {
    define([], function() {
      return vueAuthImage;
    });
  } else if (window.Vue) {
    window.VueAuthImage = vueAuthImage;
    Vue.use(vueAuthImage);
  }
})();
