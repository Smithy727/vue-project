<template>
  <div class="app-container">
    <img src="../assets/WinterLogCabin.jpg" alt="Image description">
    <div>
      <div id="canvasContainer" :ref="setCanvasContainerRef"></div>
      
    </div>
    <div id="menu"></div>
  </div>
  <div class="image-grid">
    <!-- ... -->
  </div>
</template>


<script>
import p5 from 'p5';
import sketch from '@/p5-sketch';

export default {
  name: 'Panel6',
  setup() {
    const setCanvasContainerRef = () => {
      // Your function implementation
    };
    return {
      setCanvasContainerRef
    };
  },
  mounted() {
    this.canvasContainer = this.$refs.canvasContainer;
    this.p5Instance = new p5(sketch, this.canvasContainer);
  },
  beforeUnmount() {
    if (this.p5Instance) {
      this.p5Instance.remove();
    }
  }
};
</script>


<style scoped>
.app-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .app-container img {
    width: 400px;
    height: auto;
    margin-right: 20px;
    margin-top: 60px;
    border: 10px solid var(--borders);
  }

  #menu {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    flex-direction: column;
    min-height: 30vh;
    border: 10px solid var(--borders);
    background-color: #212120;
    padding: 10px;
    padding-right: 25px;
    margin-top: 60px;
    margin-right: 20px;
    margin-left: 20px;
  }

  #canvasContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid var(--borders);
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
