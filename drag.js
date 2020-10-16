var draggedElement;
var xOffset=10;
var yOffset=10;
var active;
function dragStart(element){
	draggedElement = element;
    if(draggedElement.parentNode.style.left == ""){
        draggedElement.parentNode.style.left = "5px"
    }
    if(draggedElement.parentNode.style.top == ""){
        draggedElement.parentNode.style.top = "0px"
    }
	xOffset = event.pageX-parseInt(draggedElement.parentNode.style.left);
	yOffset = event.pageY-parseInt(draggedElement.parentNode.style.top);
	document.addEventListener("mousemove",drag);
	document.addEventListener("mouseup",endDrag);
	draggedElement.parentNode.style.boxShadow = "5px 5px 15px var(--shadow-dark)"
    draggedElement.parentNode.style.transform = "scale(1.01)"
	elements = document.getElementsByTagName("iframe")
	for(let i = 0; i < elements.length; i++){
		elements[i].classList.add("no-pointer");
	}
}

function drag(e){
	draggedElement.parentNode.style.left = (e.pageX-xOffset)+"px";
    if(e.pageY>70){
	    draggedElement.parentNode.style.top = (e.pageY-yOffset)+"px";
    }
}

//document.addEventListener("mouseup",endDrag)
function endDrag(e){
	document.removeEventListener("mousemove",drag);
	draggedElement.parentNode.style.boxShadow = "5px 5px 15px var(--shadow)"
    draggedElement.parentNode.style.transform = "scale(1)"
	elements = document.getElementsByTagName("iframe")
	for(let i = 0; i < elements.length; i++){
		elements[i].classList.remove("no-pointer");
	}
}
