let gui; //<<<<--interfaz grafica de usuario
let bt0;
let bt1     
let bt2;      
let bt3;
let bt4;
let bt5     
let bt6;      
let bt7;     
let presentacion ;     
let despedida;
let s;
let em;
let t ;
function setup() {
  createCanvas(windowWidth,windowHeight); //lienzo  
  
  
  presentacion = new oracionesEnObjeto(color(250),2,50,"Hola!,esto es para mostrar la libreria touch.gui de p5.js ",33);
  despedida = new oracionesEnObjeto(color(250),windowHeight/2,windowHeight-10,"Gracias por haber ingresado ;)",33);
  gui = createGui();
  gui.loadStyle("TerminalMagenta");

  //creando boton  seteando caracteristicas
  bt0 = createButton("READY?", windowWidth/2.5,windowHeight/2.5,350,200);
  bt1 =createButton("Efecto en Mouse",10,80,200,40);
  bt1.visible=false;
  bt2 =createButton("Formas Geometricas",50,160,200,40);
  bt2.visible=false;
  bt3 =createButton("Background Magic",10,220,200,40);
  bt3.visible=false;
  bt4 =createButton("Efecto en Puntero!",50,280,200,40);
  bt4.visible=false;
  bt5 =createButton("Efecto Flotar!",10,340,200,40);
  bt5.visible=false;
  bt6 =createButton("Efecto Caer!",50,400,200,40);
  bt6.visible=false;
  bt7 =createButton("Efecto Rebotes!",10,460,200,40);
  bt7.visible=false;
  bt8 =createButton("Moviendo Palabras",50,530,200,40);
  bt8.visible=false;
  s = createSlider("Slider",windowWidth/2,550, 400, 30, 0, 50);
  s.visible=true;
  em = new efectoMouse();


  t = createToggle("Toggle", 500, 500);


  bt0.setStyle({
    fillBg: color("ed225f"),
    rounding: 10,
    textSize: 90,
  }); 
  s
}

function draw() {
  background("#000000"); //color del lienzo
  drawGui();

  presentacion.show();
  if(bt0.isPressed){
  presentacion.hide();
  bt0.visible=false;
  bt1.visible=true;
  bt2.visible=true;
  bt3.visible=true;
  bt4.visible=true;
  bt5.visible=true;
  bt6.visible=true;
  bt7.visible=true;
  bt8.visible=true;
  s.visible=true;
  }
  let c=t.isPressed;
  if(c){
  em.show();
  em.move(s.val);
  print(t.isPressed);
} 

  em.show();
  em.move(s.val);

 
 
    
function touchMoved() {
/// Add these lines below sketch to prevent scrolling on mobile
// do some stuff
  return false;
}     

}


class efectoMouse{ 
  constructor(){
        this.q=250;
        this.s=250;
        this.t=250;
        }
     show(){
fill(0,this.q,this.s,this.t);
  
}
move(a){
ellipse(mouseX+ random(a) ,mouseY+ random(a) ,15,15);  
}
    hide(){
fill(0,0,0,0);
ellipse(mouseX,mouseY,1,1);

    }
  }
