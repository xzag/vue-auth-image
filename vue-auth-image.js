;(function () {
  var vueAuthImage = {};
  var axios = typeof require === 'function'
  ? require('axios')
  : window.Axios;

  if (!axios) {
    throw new Error('[vue-auth-image] cannot locate Axios');
  }

  function setImgSrc(el, binding) {
    if (binding.oldValue === undefined || binding.value !== binding.oldValue) {
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
      }).catch((function() {
        el.src = imageUrl;
      }));
    }
  }

  vueAuthImage.install = function(Vue) {
    Vue.directive('auth-image', {
      bind: function(el, binding) {
        setImgSrc(el, binding);
      },
      componentUpdated: function(el, binding) {
        setImgSrc(el, binding);
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
