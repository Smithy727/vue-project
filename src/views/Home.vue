<template>
  <div>
  <div class="button-container">
    <a href="canvas.html" class="canvas-button">Go to Canvas</a>
  </div>
  
  <h3 class="center">Click on an image to start drawing your 3 panels</h3>
 
  <div class="image-grid">
    <div class="image-container">
      <div>
      <router-link to="/Panel1">A Scary Forest</router-link>
      <img src="../assets/AScaryForest.jpg" alt="Image 1">
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel2">A Cat In A Forest</router-link><img src="../assets/CatInAForest.jpg" alt="Image 2">
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel3">House On Fire</router-link><img src="../assets/HouseOnFire.jpg" alt="Image 3">
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel4">Pikachu</router-link><img src="../assets/Pikachu.jpg" alt="Image 4">
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel5">Sticky</router-link><img src="../assets/StickMan.jpg" alt="Image 5">
    </div>
    </div>
    <div class="image-container">
      <div>
      <router-link to="/Panel6">Winter Log Cabin</router-link><img src="../assets/WinterLogCabin.jpg" alt="Image 6">
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
  