<template>
<div class="form">
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        <a @click="toHome" class="navbar-brand">House Selling</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="page-scroll">
            <a @click="toFrom">Buat Iklan</a>
          </li>
          <li class="page-scroll">
            <a @click="toList">List Iklan</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</div>
</template>

<script>
export default {
  name: 'form',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toFrom() {
      let data = {};
      data.action = 'create';
      this.$store.dispatch('setStatus', data)
      this.$router.push('/form')
    },
    toHome() {
      this.$router.push('/')
    },
    toList() {
      this.$router.push('/listview')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
