<template>
    <div class="app-container">
    <img src="../assets/HouseOnFire.jpg" alt="Image description">
    <div id="canvasContainer"></div>
    <div id="menu">
    </div>
    
  </div>
  <div class="image-grid">
    <div class="image-container"><img src="images/example1.jpg" alt="Example 1"></div>
    <div class="image-container"><img src="images/example2.jpg" alt="Example 2"></div>
    <div class="image-container"><img src="images/example3.jpg" alt="Example 3"></div>
    <div class="image-container"><img src="images/example4.jpg" alt="Example 4"></div>
    <div class="image-container"><img src="images/example5.jpg" alt="Example 5"></div>
    <div class="image-container"><img src="images/example6.jpg" alt="Example 6"></div>
    <div class="image-container"><img src="images/example7.jpg" alt="Example 7"></div>
    <div class="image-container"><img src="images/example8.jpg" alt="Example 8"></div>
    <div class="image-container"><img src="images/example9.jpg" alt="Example 9"></div>
    <div class="image-container"><img src="images/example1.jpg" alt="Example 10"></div>
    <div class="image-container"><img src="images/example2.jpg" alt="Example 11"></div>
    <div class="image-container"><img src="images/example3.jpg" alt="Example 12"></div>
    <div class="image-container"><img src="images/example4.jpg" alt="Example 13"></div>
    <div class="image-container"><img src="images/example5.jpg" alt="Example 14"></div>
    <div class="image-container"><img src="images/example6.jpg" alt="Example 15"></div>
    <div class="image-container"><img src="images/example7.jpg" alt="Example 16"></div>
    <div class="image-container"><img src="images/example8.jpg" alt="Example 17"></div>
    <div class="image-container"><img src="images/example9.jpg" alt="Example 18"></div>
    <div class="image-container"><img src="images/example1.jpg" alt="Example 19"></div>
    <div class="image-container"><img src="images/example2.jpg" alt="Example 20"></div>
    <div class="image-container"><img src="images/example3.jpg" alt="Example 21"></div>
    <div class="image-container"><img src="images/example4.jpg" alt="Example 22"></div>
    <div class="image-container"><img src="images/example5.jpg" alt="Example 23"></div>
    <div class="image-container"><img src="images/example6.jpg" alt="Example 24"></div>
    <div class="image-container"><img src="images/example7.jpg" alt="Example 25"></div>
    <div class="image-container"><img src="images/example8.jpg" alt="Example 26"></div>
    <div class="image-container"><img src="images/example9.jpg" alt="Example 27"></div>
    <div class="image-container"><img src="images/example1.jpg" alt="Example 28"></div>
    <div class="image-container"><img src="images/example2.jpg" alt="Example 29"></div>
    <div class="image-container"><img src="images/example3.jpg" alt="Example 30"></div>


  </div>
    </template>
    
    <script>
    export default {
      name: 'Panel3',
      props: {
        msg: String
      }
    }
    </script>
    
     Add "scoped" attribute to limit CSS to this component only 
   
    <style scoped>
.app-container {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Change this line */
    gap: 20px;
    margin-right: 20px;
    margin-left: 20px;
    
  }
  .app-container img {
    width: 400px; /* Set the width of the image */
    height: auto;
    margin-right: 20px; /* Add margin to the right to separate from the canvas container */
    margin-top: 60px;
    border: 4px solid rgb(224, 51, 16);
  }
  
  #menu {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    flex-direction: column;
    min-height: 30vh;
    border: 3px solid rgb(224, 51, 16); /* Add border around the menu */
    padding: 10px; /* Add padding inside the menu */
    padding-right: 25px;
    margin-top: 60px; /* Add margin to align with the top of the canvas */
    margin-right: 20px;
    margin-left: 20px;
  }
  
  
  
  #canvasContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid rgb(224, 51, 16);
    width: fit-content;
    height: fit-content;
    padding: 1px;
    box-sizing: content-box;
    margin-top: 60px;
  }
  
  
  .canvas-button:hover {
    background-color: #da531a;
  }
    
    </style>