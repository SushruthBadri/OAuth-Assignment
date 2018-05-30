
<template>
 <div class="main">
 <div class="second">
 <div class="git">
 <button>
 
 <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=e74c38c9dbb8a05f2acd">Sign-in with Github</a></button></div><br/>
  <div class="g-signin2" data-onsuccess="onSignIn">Sign in</div>
 <div id="fb-root">
   <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false">fb signin</div>
   </div>
    </div>
    </div>
  </template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {},
  mounted() {
      window.fbAsyncInit = function() {
    FB.init({
      appId            : '354086634996428',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.0',
    });
  };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .second{
         display: flex;
        flex-wrap: wrap;
     align-self: center;
          
        align-items: center;
        width: 15%;
        justify-content: center;
    }
    .main{
        display: flex;
        flex-wrap: wrap; 
        
        background-color: orangered;
        align-self: center;
        align-items: center;
        align-content: center;
        width: 80%;
        height: 500px;
        border: 1px solid;
        justify-content: center;
       
        
     }
    .g-signin2{
        display: flex;
        flex-wrap: wrap;
     align-self: center;
        
        align-content: center;
        padding-top: 20px;
    }
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
  color: black;
    text-decoration: none;
}
    .fb-login-button{
      display: flex;
        flex-wrap: wrap;
     align-self: center;
         
         padding-top: 20px;
    }
    .git{
        display: flex;
        flex-wrap: wrap;
     align-self: center;
          height: 40px;
        
         padding-top: 20px;
    }
</style>
