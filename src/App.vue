<template>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Fira+Sans:ital,wght@1,700&display=swap" rel="stylesheet">

  
 <HeaderComponent/>
  <router-view/>
  
 
  <FooterComponent />
  
</template>

<script>
// const imgUrl = import ("src\assets\A scary forest.jpg");
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import PanelGrid from './components/PanelGrid.vue'
import UploadForm from './components/UploadForm.vue'

import FooterComponent from './components/FooterComponent.vue'
import Background from './components/Background.vue'




export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PanelGrid,
    UploadForm,
    Background
   
  
  }
  
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:da531a;
  color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  
}






</style>
