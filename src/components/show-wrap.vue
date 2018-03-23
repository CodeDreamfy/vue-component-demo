<template>
  <div class="show-wrap">
    <div class="simulation">
      <div class="component"
      :is="component.name"
      :text="component.text"
      v-for="component in componentList"
      :key="component.id">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['componentList'],
};
</script>

<style>

</style>
