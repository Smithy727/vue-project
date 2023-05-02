<template>
    
   <div class="text">
    <h1>The Gallery</h1>
</div>
   
    </template>
    
    <script>
    export default {
      name: 'Gallery',
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
    background-position: center;
    display:flex;
    justify-content: center;
    align-items: center;
    width:auto;
    padding: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    stroke: #282828;
    font-size: 20px;
   }
    </style>
    