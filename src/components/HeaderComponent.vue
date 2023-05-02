<template>
  <header> 
    
    <nav>
      <ul class="nav_links">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/Gallery">GALLERY</router-link></li>
        <li><router-link to="/About">ABOUT</router-link></li>
        
      </ul>
    </nav>
  </header>
    <div class="header-container">
      <div class="title"><h1>Comic Mashup</h1></div>
      
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
    background:url('../assets/HeaderBackground.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    padding: 100px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 100px;
    stroke: #282828;
    border: 15px solid var(--borders);
    
  }
 
    </style>
    