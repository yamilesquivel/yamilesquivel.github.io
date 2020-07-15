
var capvid; //camara
let gui;    //interfaz grafica de usuario
let on;     //boton 
let t;       //toogle
let i=0;     //contador
let tx ;     //texto

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);  
  capvid =createCapture(VIDEO);
  capvid.size(320,240);
  capvid.hide();
  
  cursor("text("letter",mouseX,mouseY,80,80)");

   gui = createGui();
   //creando boton
   on = createButton("Button", 50, 15,150,50);

   //Creando Toggle
    t = createToggle("Toggle", 200, 15, 350, 50);

    on.setStyle({
    fillBg: color("#a09e4e"),
    rounding: 25,
    textSize: 20,
  });


}
  


function draw() {
  background("#f00e4f");
  drawGui(); 
  Stroke();
  nofill();
  rect(45,15,windowWidth-45,windowHeight/3);
  

  //image(capvid,200,95,720,420);
 
   
   
    if(on.isPressed) {
        print( on.label + " is pressed. "+  i++ );
      }
  if (on.isHeld) {
    // Draw an ellipse when Button is he.

    fill(132,206,9);
    textSize(i);
    text(" size "+i*10,150,200);
    
    ellipse(200, 300, 100);
    
  }

  /// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}     

}




