<template>
  <div>
 
  
  <h3 class="center">Click on an image to start drawing your 3 panels</h3>
 <br>
  <div class="image-grid">
    <div class="image-container">
      <div>
      <router-link to="/Panel1"><img src="../assets/AScaryForest.jpg" alt="Image 1"></router-link>
      
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel2"><img src="../assets/CatInAForest.jpg" alt="Image 2"></router-link>
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel3"><img src="../assets/HouseOnFire.jpg" alt="Image 3"></router-link>
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel4"><img src="../assets/Pikachu.jpg" alt="Image 4"></router-link>
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel5"><img src="../assets/StickMan.jpg" alt="Image 5"></router-link>
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel6"><img src="../assets/WinterLogCabin.jpg" alt="Image 6"></router-link>
    </div>
    </div>
  </div>
 </div>
  </template>
  
  <script>
  
  
  export default {
    
    name: 'HomeView',
    props: {
      msg: String
    }
  }
  
  </script>
  
 
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
   .center {
  margin: auto;
  width: 40%;
}
  </style>
  