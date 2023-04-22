<template>
 <HeaderComponent/>
  <!-- <nav id="nav">
        <ul class="nav_links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="{ name: 'About' }">About</router-link></li>
        </ul>
      
    </nav>  -->

  <!-- <router-view/>  -->
  <HomeComponent />
  <FooterComponent />
  
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent,
    HeaderComponent,
    FooterComponent
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
