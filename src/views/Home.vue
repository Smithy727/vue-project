<template>
    <div class="button-container">
      <a href="canvas.html" class="canvas-button">Go to Canvas</a>
    </div>
    <h3>Click on an image to start drawing your 3 panels</h3>
    <div class="image-grid">
      <div class="image-container">
        <router-link to="{ name: 'Panel1' }" img src="\src\assets\A scary forest.jpg" alt="A scary forest">Panel One</router-link>
       
      </div>
      <div class="image-container">
        <a href="Panel_2.html"><img src="assets\cat in a forest.jpg" alt="cat in a forest"></a>
      </div>
      <div class="image-container">
        <a href="Panel_3.html"><img src="assets\house on fire.jpg" alt="house on fire"></a>
      </div>
      <div class="image-container">
        <a href="Panel_4.html"><img src="assets\pikachu.jpg" alt="ikachu"></a>
      </div>
      <div class="image-container">
        <a href="Panel_5.html"><img src="assets\Stick man.jpg" alt="Stick man"></a>
      </div>
      <div class="image-container">
        <a href="Panel_6.html"><img src="assets\winter log cabin.jpg" alt="winter log cabin"></a>
      </div>
    </div>
    </template>
    
    <script>
    export default {
      name: 'Home',
      props: {
        msg: String
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    
    </style>
    