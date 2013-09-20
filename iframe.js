
/* определим тип браузера */   
	var bIE=0;bOp=0;bFF=0;
	var verBr=navigator.userAgent;
	if (verBr.indexOf("Opera")!=-1)
	     bOp=1;
	  else 
	   {
	   if (verBr.indexOf("MSIE")!=-1)
	      bIE=1;
	    else
		 {
	      //if (verBr.indexOf("Firefox")!=-1)
	        bFF=1;
		 }
	   }

function move_div(id_div_okno,id_div_zagol)
  {
    this.id_div_okno=id_div_okno;
    this.id_div_zagol=id_div_zagol;
    this.obj_okno=document.getElementById(this.id_div_okno);

    this.obj_zagol_okno=document.getElementById(this.id_div_zagol);
    this.delta_x=0;
    this.delta_y=0;
    
    
    
    this.save_delta_koor = function(obj_move,obj_evt)
      {

       
       obj_move.delta_x=obj_move.obj_okno.offsetLeft-obj_evt.pageX;
       obj_move.delta_y=obj_move.obj_okno.offsetTop-obj_evt.pageY;
       
       
       document.onmousemove=function(o){ obj_move.motor_okno(obj_move,o) };
       if (bOp || bFF)
         document.addEventListener("onmousemove",obj_move.motor_okno,false);
       
      }
     
    
     
    this.motor_okno = function(obj_move,obj_event)
      {
              
       //window.status=new_x+" "+new_y;
       
       obj_move.obj_okno.style.top=obj_move.delta_y+obj_event.pageY+"px";
       obj_move.obj_okno.style.left=obj_move.delta_x+obj_event.pageX+"px";
       
      }
   
    var self=this;
       this.obj_zagol_okno.onmousedown=function(o){ self.save_delta_koor(self,o) };
       if (bOp || bFF)
         {
          this.obj_zagol_okno.addEventListener("onmousedown",self.save_delta_koor,false);
          
         }
       
       //this.obj_zagol_okno.onmouseup=self.clear_delta_koor;
       document.onmouseup=function()
      {
       document.onmousemove=null;
       //setup_mouse();
       
      };
  }
document.addEventListener("DOMContentLoaded", function(){
	mousedown=false;
	document.getElementsByTagName('IFRAME')[0].setAttribute('width', window.screenX+"px");
	document.getElementsByTagName('IFRAME')[0].setAttribute('height',-1*window.screenY+"200px");
	
	obj_move1 = new move_div("a","a");
	
	document.getElementsByTagName('button')[0].addEventListener("click",function(){
		document.getElementsByTagName('IFRAME')[0].setAttribute('src', "http:"+document.getElementsByTagName('INPUT')[0].value);	
	
	
	},false);
          
         

	
}, false);

