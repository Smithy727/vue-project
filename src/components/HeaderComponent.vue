<template>
  <header> 
    
    <nav>
      <ul class="nav_links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">Gallery</router-link></li>
        
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
    