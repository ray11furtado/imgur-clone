<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <div class="right menu login">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="/" class="ui item">Galleries</router-link>
        <router-link to="/upload" class="ui item">Upload</router-link>

        <button class="ui item" @click="logout">Logout</button>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  props: [],
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>

<style scoped>
.login {
  padding-right: 5px;
}
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>