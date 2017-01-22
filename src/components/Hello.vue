<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <label for="username">Username</label>
      <input type="text" v-model="userName" />
    </p>
    <p>
      <label for="password">Age</label>
      <input type="text" v-model="age">
    </p>
    <p>
      <button @click="addUser">Add</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      age: ''
    }
  },
  methods: {
    addUser () {
      var name = this.userName
      var age = this.age
      axios.post('/api/user/adduser', {
        username: name,
        age: age
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
p {
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
}
p label {
  width: 80px;
  display: inline-block
}
</style>
