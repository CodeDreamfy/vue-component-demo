<template>
  <div class="btn-wrap">props: {{ text }}</div>
</template>

<script>
export default {
  name: 'TestComponent',
  props: ['text'],
  methods: {
    handleClick() {
      this.$emit('customize-click') // eslint-disable-line
    },
  },
};
</script>

<style>

</style>
