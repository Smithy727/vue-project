<template>
  <header> 
    
    <nav>
      <ul class="nav_links">
        <li><a href="index.html">Home</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </header>
  <div class="header-container">
    
    <h1 >Collaborative Drawing App</h1>
  </div>
    </template>
    
    <script>
    
    export default {
      name: 'HeaderComponent',
      props: {
        msg: String
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>



  
    </style>
    