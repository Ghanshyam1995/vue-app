<template>
  <div id="app">

<md-toolbar>
  <md-button class="md-icon-button">
    <md-icon>menu</md-icon>
  </md-button>

  <div class="md-title" style="flex: 1"></div>

  <md-button class="md-raised-button" v-if="!isLoggedIn()" >
    <router-link v-bind:to="'login'" >Login</router-link>
  </md-button>
<button class="md-raised-button" v-if="isLoggedIn()" v-on:click="Logout">Logout</button>
  
</md-toolbar>


 <router-view></router-view>

 </div>
 
  </div>

</template>

<script>

export default {
  name: 'app',
  methods:{
    isLoggedIn:function(){
     
      if(localStorage.getItem("user_token")!=null)
      return true;
      else
      return false;
    },
    Logout:function(){
      localStorage.removeItem("user_token");
      this.$router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  
}
md-toolbar{
  margin-bottom:20px!important;
}
</style>
