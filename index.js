document.addEventListener( "DOMContentLoaded", function(){

			var x=document.getElementsByClassName('in-block');
			var y=document.getElementsByClassName('out-block');
			var check="start";
			var operation='';
			var sX=0;
			var sY=0;
		for(var i=0;i<x.length;i++){
			x[i].addEventListener( "click", function(){
					//y[0].innerHTML =parseInt(this.innerHTML)-z;
					var num=parseInt(this.innerHTML);
					
					if(!num&&check=="middle"){
						operation=this.innerHTML;
						check="end";
						y[0].innerHTML+=operation;
						
					}
					

					if(check=="start"&&num){
						sX=num;
						sY=0;
						check="middle";
						y[0].innerHTML=num;
					}
					
					
					
					if(check=="end"&&num){
						sY=num;
						var res=0;
						switch(operation){
						case "+":res=sX+sY;
						break;
						case "-":res=sX-sY;
						break;
						case "/":res=sX/sY;
						break;
						case "*":res=sX*sY;
						break;
						case "%":res=sX%sY;;
						break;
						}
						y[0].innerHTML+=sY+'='+res;
						check="start";
						operation='';

					};
				//	this.style.border = "1px dotted black";
			});
			
			x[i].addEventListener( "mouseout", function(){
				//	this.style.border = "1px dotted #fff";
			});
		};
})

