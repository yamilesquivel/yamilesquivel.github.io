class  oracionesEnObjeto {

    constructor(colorHexa,posX,posY,texto,size){
	 				   
               	    this.colorHex= colorHexa;
                   this.posX1=posX;
                   this.posY1=posY;
                   this.texto1=texto;
                  this.size1=size;
                    }
show(){

 fill(this.colorHex);
 textSize(this.size1);
 
 text(this.texto1,this.posX1,this.posY1);


}

}