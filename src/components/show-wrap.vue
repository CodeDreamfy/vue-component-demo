<template>
  <div class="show-wrap">
    <div class="simulation" ref="simuWrap">
    </div>
  </div>
</template>

<script>
export default {
  props: ['componentList'],
  data() {
    return {
      broadcast: null,
      isBorad: false,
    };
  },
  methods: {
    init(cb) {
      const iframe = document.createElement('iframe');
      iframe.src = 'http://localhost:8080/static/web/index.html';
      iframe.className = 'iframeClass';
      iframe.frameborder = 0;
      this.$refs.simuWrap.appendChild(iframe);
      const that = this;
      iframe.onload = function () { // eslint-disable-line
        console.log(that.componentList);  // eslint-disable-line
        // that.broadcast.postMessage(that.componentList);
        cb && cb(); // eslint-disable-line
      };
      return iframe.contentWindow;
    },
    heavyLoad(value) {
      if (this.isBorad) {
        this.broadcast.postMessage(value);
      } else {
        this.broadcast.postMessage(JSON.stringify(value), '*');
      }
    },
  },
  mounted() {
    const context = this.init();
    const bc = new BroadcastChannel('app');
    if (bc) {
      this.broadcast = bc;
      this.isBorad = true;
    } else {
      this.broadcast = context;
    }
  },
};
</script>

<style>
.iframeClass {
  width: 100%; height: 100%;
}
</style>
