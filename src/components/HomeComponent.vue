<template>
  <div>
  <div class="button-container">
    <a href="canvas.html" class="canvas-button">Go to Canvas</a>
  </div>
  
  <h3 class="center">Click on an image to start drawing your 3 panels</h3>
 
  <div class="image-grid">
    <div class="image-container">
      <a href="Panel_1.html"><img src="../assets/AScaryForest.jpg" alt="Image 1"></a>
    </div>
    <div class="image-container">
      <a href="Panel_2.html"><img src="../assets/CatInAForest.jpg" alt="Image 2"></a>
    </div>
    <div class="image-container">
      <a href="Panel_3.html"><img src="../assets/HouseOnFire.jpg" alt="Image 3"></a>
    </div>
    <div class="image-container">
      <a href="Panel_4.html"><img src="../assets/Pikachu.jpg" alt="Image 4"></a>
    </div>
    <div class="image-container">
      <a href="Panel_5.html"><img src="../assets/StickMan.jpg" alt="Image 5"></a>
    </div>
    <div class="image-container">
      <a href="Panel_6.html"><img src="../assets/WinterLogCabin.jpg" alt="Image 6"></a>
    </div>
  </div>
 </div>
  </template>
  
  <script>
  
  
  export default {
    
    name: 'HomeComponent',
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
  