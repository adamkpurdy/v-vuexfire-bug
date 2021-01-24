
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
/* eslint-disable no-debugger */
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  async mounted () {
    debugger
    await this.getUsers()
    const usersFromState = this.$store.state.users.usersCollection
    console.log(usersFromState.length)
  },
  methods: {
    ...mapActions('users', ['getUsers'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
