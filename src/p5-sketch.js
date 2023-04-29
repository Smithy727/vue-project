export default function sketch(p) {

  let mainCanvas;
  let canvases;
  let currentCanvas;
  let colorWheel;
  let brushSizeSlider;
  let brushStyleDropdown;
  let clearButton;
  let panalButtons;
  let saveButton;
  
  p.setup = function () {
    mainCanvas = p.createCanvas(800, 800);
    mainCanvas.parent("canvasContainer");
    p.background(255);
  
    canvases = [
      p.createGraphics(800, 800),
      p.createGraphics(800, 800),
      p.createGraphics(800, 800),
    ];
    currentCanvas = 0;
    canvases.forEach((canvas) => {
      canvas.background(255);
    });
  
    colorWheel = p.createColorPicker("#000000");
    brushSizeSlider = p.createSlider(1, 50, 10);
    brushSizeSlider.style("width", "150px");
    
    brushStyleDropdown = p.createSelect();
    brushStyleDropdown.option("normal");
    brushStyleDropdown.option("watercolor");
  
    clearButton = p.createButton("Clear");
    clearButton.mousePressed(clearCanvas);
  
    saveButton = p.createButton("Save");
    saveButton.mousePressed(saveCanvas);
  
    panalButtons = [];
    for (let i = 0; i < 3; i++) {
      const button = p.createButton(`Panal ${i + 1}`);
      button.mousePressed(() => switchCanvas(i));
      panalButtons.push(button);
    }
  
    const menu = p.select("#menu");
    menu.child(colorWheel);
    menu.child(brushSizeSlider);
    menu.child(brushStyleDropdown);
    menu.child(clearButton);
    menu.child(saveButton);
    panalButtons.forEach((button) => menu.child(button));
  };
  
  p.draw = function () {
    p.background(255);
    p.image(canvases[currentCanvas], 0, 0);
  
    if (p.mouseIsPressed) {
      if (p.mouseButton === p.LEFT) {
        const brushStyle = brushStyleDropdown.value();
        if (brushStyle === "normal") {
          drawNormalBrush(canvases[currentCanvas]);
        } else if (brushStyle === "watercolor") {
          drawWatercolorBrush(canvases[currentCanvas]);
        }
      }
    }
  };
  
  function drawNormalBrush(canvas) {
    canvas.stroke(colorWheel.color());
    canvas.strokeWeight(brushSizeSlider.value());
    canvas.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
  }
  
  function drawWatercolorBrush(canvas) {
    const brushSize = brushSizeSlider.value();
    const numLayers = 15;
    const layerSpread = 1.5;
    const baseColor = colorWheel.color();
  
    for (let i = 0; i < numLayers; i++) {
      const layerSize = brushSize * (1 + layerSpread * (i / numLayers));
      const layerAlpha = p.map(i, 0, numLayers - 1, 255, 0);
      const layerColor = p.color(
        p.red(baseColor),
        p.green(baseColor),
        p.blue(baseColor),
        layerAlpha
      );
  
      canvas.stroke(layerColor);
      canvas.strokeWeight(layerSize);
      canvas.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
  }
  
  
  function clearCanvas() {
    canvases[currentCanvas].background(255);
  }
  
  function switchCanvas(index) {
    currentCanvas = index;
  }
  // Save the canvas image and add it to the saved images array
  function saveCanvas() {
    const savedCanvas = mainCanvas.canvas.toDataURL("image/png");
    savedImages.push({ src: savedCanvas });
    
  }
  }