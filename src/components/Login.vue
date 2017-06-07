<template>
   <div id="login">
       <md-card md-with-hover>
        <form v-on:submit.prevent="onSubmit">
     <md-card-header>
      <div class="md-title">Login</div>
     </md-card-header>

     <md-card-content>
    
   <md-input-container>
      <label>Email</label>
    <md-input name="email" v-model="email" data-vv-name="email" v-validate="'required|email'" type="text"></md-input>
  </md-input-container>
   <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>

  <md-input-container>
      <label>Password</label>
     <md-input type="password" v-model="password" data-vv-name="password" v-validate="'required|min:8|max:16'"></md-input>
  </md-input-container>
  <p class="text-danger"  v-if="errors.has('password')">{{ errors.first('password') }}</p>
     </md-card-content>
<md-button type="submit">Login</md-button>
</form>
 </md-card>
   </div>
</template>
<script>
  export default {
      name :'login',
      data:()=>({
        email :'',
        password:''
      }),
      methods:{
      onSubmit:function(e)
      {
        debugger;
         localStorage.setItem("user_token",this.email);
         this.$router.push('/about');
      }
   
    }
  }
  
</script>

<style>
  .text-danger{
    color:Red;
  }
</style>