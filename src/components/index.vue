<template>
  <div class="wrapper">
    <theme-color></theme-color>
    <div class="container clearfix">
      <div class="common-left">
        <function-edit @increment="componentAdd"></function-edit>
      </div>
      <div class="common-right">
        <show-wrap :componentList="componentF"></show-wrap>
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
      componentF: [],
    };
  },
  methods: {
    componentAdd(component, value) {
      console.log(component, value); // eslint-disable-line
      this.componentF.push({
        name: component,
        text: value,
      });
    },
  },
  components: {
    ThemeColor,
    FunctionEdit,
    ShowWrap,
  },
};
</script>
