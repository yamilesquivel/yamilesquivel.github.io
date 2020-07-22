let cb;      //checkboxes
var capvid; //camara
let gui;    //interfaz grafica de usuario
let on;     //boton 
let t;       //toogle
let i=0;     //contador
let escribir ;     //texto


function setup() {
  createCanvas(windowWidth,windowHeight); //lienzo  
  
  /*capvid =createCapture(VIDEO); 
  capvid.size(320,240);
  capvid.hide();
 */
  presentacion = new oracionesEnObjeto(color(250),2,50,"Hola!,esto es para mostrar la libreria touch.gui de p5.js ",33);
  despedida = new oracionesEnObjeto(color(250),windowHeight/2,windowHeight-10,"Gracias por haber ingresado ;)",33);
    
   gui = createGui();
   gui.loadStyle("TerminalYellow");
   //creando boton  seteando caracteristicas
    on = createButton("start ?", windowWidth/2,windowHeight/2,150,50);
    on.setStyle({
    fillBg: color("#ed225d"),
    rounding: 25,
    textSize: 20,
  });

  
    
}

function draw() {

  
  background("#000000"); //color del lienzo
  drawGui();
  // image(capvid,200,95,720,420);
  presentacion.show();

  if(on.isHeld){
  presentacion.hide();
  
      }


function touchMoved() {/// Add these lines below sketch to prevent scrolling on mobile
  // do some stuff
  return false;
}     

}


class efectoPuntero{

        constructor(){

        }
     show()
{

fill(0,random(250),random(250),random(250));
ellipse(mouseX+ random(25),mouseY+random(25),15,15);
  
}
}




