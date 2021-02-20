var draggedElement; //element that's dragged
var xOffset = 10; //the defualt offset of the elements
var yOffset = 10;

//calls function when mouse in down
function dragStart(element) {
	//gets the element
	draggedElement = element;

	//sets the element to the defualt position if there is not set position
	if (draggedElement.parentNode.style.left == "")
		draggedElement.parentNode.style.left = "5px";
	if (draggedElement.parentNode.style.top == "")
		draggedElement.parentNode.style.top = "0px";

	//get the position of the cursors
	xOffset = event.pageX - parseInt(draggedElement.parentNode.style.left);
	yOffset = event.pageY - parseInt(draggedElement.parentNode.style.top);

	//adds eventListeners and remove them after drag is finished
	//the reason we can't just add eventListeners to the elements that going to be drags is because if the mouse moves too fast it goes out of the element and stops dragging.
	document.addEventListener("mousemove", drag);
	document.addEventListener("mouseup", endDrag);

	//increase and size and box shadow when dragging
	draggedElement.parentNode.style.boxShadow = "5px 5px 15px var(--shadow-dark)";
	draggedElement.parentNode.style.transform = "scale(1.01)";

	//make the iframes have no pointer events so you can still drag when over them
	elements = document.getElementsByTagName("iframe");
	for (let i = 0; i < elements.length; i++) {
		elements[i].classList.add("no-pointer");
	}
}

function drag(e) {
	//called ever time the mouse moves and moves the window to the mouse
	draggedElement.parentNode.style.left = (e.pageX - xOffset) + "px";
	//makes it not possible to drag under the header
	if (e.pageY > 70)
		draggedElement.parentNode.style.top = (e.pageY - yOffset) + "px";
}

//ends the drag and removes the eventListeners
function endDrag(e) {
	document.removeEventListener("mousemove", drag);
	draggedElement.parentNode.style.boxShadow = "5px 5px 15px var(--shadow)"
	draggedElement.parentNode.style.transform = "scale(1)"
	elements = document.getElementsByTagName("iframe");
	for (let i = 0; i < elements.length; i++) {
		elements[i].classList.remove("no-pointer");
	}
}
