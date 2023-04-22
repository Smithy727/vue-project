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
    <h1>Collaborative Drawing App</h1>
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

.header-container {
  background-image: url();
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
}

  
    </style>
    