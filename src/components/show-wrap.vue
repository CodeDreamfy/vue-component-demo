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
      iframe.src = 'http://demo.todojs.cn/weexTest/#/';
      iframe.className = 'iframeClass';
      iframe.name = 'diy';
      iframe.frameborder = 0;
      this.$refs.simuWrap.appendChild(iframe);
      iframe.onload = function () { // eslint-disable-line
        // that.broadcast.postMessage(that.componentList);
        cb && cb(); // eslint-disable-line
      };
      return iframe.contentWindow;
    },
    heavyLoad(value) {
      const v = {
        mode: 'custom',
        data: value,
      };
      // const v = {
      //   mode: 'debug',
      //   data: {
      //     device_sn: 1,
      //     product_id: '5adc44dcc090a9002b04385c',
      //     app_id: 'sasasa',
      //     token: '1ab54yuI',
      //     type: 'production',
      //   },
      // };
      console.log("prop::", v); // eslint-disable-line
      if (this.isBorad) {
        this.broadcast.postMessage(JSON.stringify(v));
      } else {
        this.broadcast.postMessage(JSON.stringify(v), '*');
      }
    },
  },
  mounted() {
    const context = this.init();
    const bc = new BroadcastChannel('hewu-app'); // new BroadcastChannel('app')
    if (false) { // eslint-disable-line
      this.broadcast = bc;
      this.isBorad = true;
      // context.onmessage = function(event){ // eslint-disable-line
      //   console.log(event.data); // eslint-disable-line
      // };
    } else {
      this.broadcast = context;
      // window.addEventListener('message', (event) => {
      //   const origin = event.origin || event.originalEvent.origin;
      //   if (origin !== window.location.origin) {
      //     return;
      //   }
      //   console.log("rback", event.data); // eslint-disable-line
      // }, false);
    }
  },
};
</script>

<style>
.iframeClass {
  width: 100%; height: 100%;
}
</style>
