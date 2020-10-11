

//creates a new calculator window
var addCalculator = () => {
    container = document.getElementById('main-container');
    calculator = "<div class='part-container calculator'><div class='drag-bar' onmousedown='dragStart(this)''><p>calculator</p><button>×</button></div><iframe src='Parts/Calculator/index.html'></iframe></div>"
    container.innerHTML += calculator;
}

var closeWindow = (element) => {
    console.log("hello")
	element.parentNode.remove();
}
