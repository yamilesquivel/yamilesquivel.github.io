//accion de camara
//var capvid;

//interfaz de usuario
let gui;
let on;
let t;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  ///pixelDensiti
  /*
  capvid =createCapture(VIDEO);
  capvid.size(320,240);
  capvid.hide();
  


   // Create Toggle
  t = createToggle("Toggle", 100, 50, 200, 50);   */
   //cargando un boton

   gui = createGui();
   on = createButton("Button", 50, 50);


}

function draw() {
  // put drawing code here
  background(100,150,30);
  drawGui(); 

  /*image(capvid,0,0,height,width);
  filter(INVERT);
   */
  //dibujando un boton
    

    if(b.isPressed) {
    print(b.label + " is pressed.");
  }
  if (b.isHeld) {
    // Draw an ellipse when Button is held.

    fill(255, 0, 0);
    ellipse(200, 300, 100);
  }

  /// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}     

}




