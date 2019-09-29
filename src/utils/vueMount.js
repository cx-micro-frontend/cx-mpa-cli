export default {
  install: function(Vue, options) {
    Vue.prototype.test = () => {
      console.log('test');
    };
  },
};
