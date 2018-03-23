export default function WithConsole(WrapperComponent) {
  return {
    mounted() {
      console.log("i have already mouted"); // eslint-disable-line
    },
    render(h) {
      return h(WrapperComponent, {
        on: this.$listeners,
        attrs: this.$attrs,
      });
    },
  };
}
