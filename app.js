new Vue({
  el: '#app',
  data: {
    playerLife: 0,
    monsterLife: 5,
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0
    }
  },
  methods: {},
  watch: {}
})
