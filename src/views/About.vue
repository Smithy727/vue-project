<template>

  <div id="content">
    <div class="titleContainer">
      <h1>How To Use This Website</h1>
    </div>
    <div id="feature">
      <br>
    </div>
  </div>
  <div class="text">
    <br>
    <p> Comic Mashup is a user-friendly online drawing tool designed for artists, designers, or anyone who enjoys digital doodling. With its intuitive interface and easy-to-use features, it offers a seamless drawing experience on the web. </p>
    <br>
  </div>
  
  <div class="text">
    <br>
    <p>Description: The Canvas Drawing App is a user-friendly online drawing tool designed for artists, designers, or anyone who enjoys digital doodling. With its intuitive interface and easy-to-use features, it offers a seamless drawing experience on the web.</p>
    <br>
  </div>

  <div class="text">
    <br>
    <p>To use the Canvas Drawing App, follow these steps:</p>
    <br>
  </div>
  <div class="text">
    <br>
    <p>Customize your brush: On the right-hand side menu, you can choose the brush color using the color picker, adjust the brush size with the slider, and select a brush style from the dropdown menu. There are two brush styles available: normal and watercolor.</p>
    <br>
  </div>
  <div class="text">
    <br>
    <p>Start drawing: Click and drag your cursor on the canvas to create your artwork. The canvas will respond to your brush settings, allowing you to experiment with various colors, sizes, and styles. </p>
    <br>
  </div>
  <div class="text">
    <br>
    <p>Switch between canvases: The app features three separate canvases for you to work on different drawings simultaneously. Click the "Canvas 1", "Canvas 2", or "Canvas 3" buttons on the right-hand menu to switch between canvases. Your work will be saved on each canvas separately. </p>
    <br>
  </div>
  <div class="text">
    <br>
    <p>Clear the canvas: If you want to start fresh, click the "Clear" button on the right-hand menu to erase all your current artwork from the active canvas. </p>
    <br>
  </div>
  
 
  

 </template>
  

   
   
    
    <script>
    export default {
      name: 'About',
      props: {
        msg: String
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
  .text {
    font-family: 'Comic Neue', cursive;
    font-family: 'Fira Sans', sans-serif;
    background-color: #261C69;
    border: 5px solid #261C69;
    background-position: center;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 20px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    stroke: #282828;
    font-size: 20px;
   }
   .text:hover {
    color:#FFC542 ;
   }
   .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 20px solid var(--borders); /* Add a border around each individual image */
    background-color: #261C69;
   }
    </style>


    