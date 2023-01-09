export default (props) => ({
  count: props.initialCount,
  inc() {
    this.count++
  },
  mounted() {
    console.log(`I'm mounted!`)
  }
})