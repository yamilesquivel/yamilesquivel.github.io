let cb;
var capvid; //camara
let gui;    //interfaz grafica de usuario
let on;     //boton 
let t;       //toogle
let i=0;     //contador
let escribir ;     //texto


function setup() {
  createCanvas(windowWidth,windowHeight); //lienzo  
  
  capvid =createCapture(VIDEO); 
  capvid.size(320,240);
  capvid.hide();
 
 
  escribir = new oracionesEnObjeto(color(250),3,90,"Hola!,esto es para mostrar la libreria touch.gui para interfaz de usuario",29);

    
   gui = createGui();
   //creando boton
   on = createButton("Button", 10, 90,150,50);

   //Creando Toggle
    t = createToggle("Toggle", 200, 15, 350, 50);

    cb=createCheckbox("confir",50,70);
    
    on.setStyle({
    fillBg: color("#a99e4e"),
    rounding: 25,
    textSize: 20,
  });
 
    
}
  


function draw() {
  background("#000000"); //color del lienzo
  drawGui(); 

    //textSize(500);
    //text("hola",300,300);

   escribir.show()

   if(cb.isPressed) { 
  rect(400,200,400,60);
    }
   

 // image(capvid,200,95,720,420);
 
   if(t.onPressed) { 
    
  rect(400,200,55,60);
    }
   
  if(on.isPressed) {
        print( on.label + " is pressed. "+  i++ );
      }


  if (on.isHeld) {
    // Draw an ellipse when Button is he.

    fill(132,206,9);
    textSize(250);
    text(" size "+i*10,50,250);
//   ellipse(200, 300, 100);
    
  }


  /// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}     

}

function xfPuntero()
{

  fill(0,random(250),random(250),random(250));
  ellipse(mouseX+ random(25),mouseY+random(25),15,15);
  
}





