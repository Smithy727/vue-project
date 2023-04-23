<template>
 <HeaderComponent/>
  <HomeComponent />
  <FooterComponent />
  
  
</template>

<script>
// const imgUrl = import ("src\assets\A scary forest.jpg");
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'

import FooterComponent from './components/FooterComponent.vue'




export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    FooterComponent,

    
  
  }
  
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:#282828;
  color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
}


</style>
