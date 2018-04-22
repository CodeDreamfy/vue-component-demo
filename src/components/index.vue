<template>
  <div class="wrapper">
    <theme-color></theme-color>
    <div class="container clearfix">
      <div class="common-left">
        <function-edit @increment="componentAdd"></function-edit>
      </div>
      <div class="common-right">
        <show-wrap ref="com-right" :componentList="comList"></show-wrap>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeColor from './theme-color';
import FunctionEdit from './function-edit';
import ShowWrap from './show-wrap';

export default {
  data() {
    return {
      comList: null,
    };
  },
  methods: {
    componentAdd(component) {
      this.comList = component;
      this.$refs['com-right'] && this.$refs['com-right'].heavyLoad(component); // eslint-disable-line
    },
  },
  components: {
    ThemeColor,
    FunctionEdit,
    ShowWrap,
  },
};
</script>
