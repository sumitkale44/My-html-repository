var div = document.getElementByID("div1");
var pointer;
div.addEventListener("mousedown", onMouseDown);
function onMouseDown(e){
	pointer = e.target;
	document.addEventListener("mousemove", onMouseMove);
	document.addEventListener("mouseup", onMouseUp);
}
function onMouseMove(e){
	pointer.left = e.pageX;
	pointer.top = e.pageY;
}
function onMouseUp(e){
	var bool = false;
	for(var i=0; i<obj.options.length; i++){
		if(bool){
			bool = true;
			pointer.left = this["rect_"+i].left;
			pointer.top = this["rect_"+i].right;
			break;
		}
	}
	if(!bool){
		pointer.left = org.x;
		pointer.top = org.y;
	}
	document.removeEventListener("mousemove", onMouseMove);
	document.removeEventListener("mouseup", onMouseUp);
}
function onMouseMove(e){
	pointer.left = e.pageX;
	pointer.top = e.pageY;
}