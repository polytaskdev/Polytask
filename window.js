

//creates a new calculator window
var addCalculator = () => {
    container = document.getElementById('main-container');
    calculator = `<div class="part-container calculator" onclick = "goTop(this)"><div class="drag-bar" onmousedown="dragStart(this)"><p>calculator</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Calculator/index.html"></iframe></div>`
    container.innerHTML += calculator;
}

//creates a new snake window
var addSnake = () => {
    container = document.getElementById('main-container');
    snake = `<div class="part-container snake" onclick = "goTop(this)"><div class="drag-bar" onmousedown="dragStart(this)"><p>snake</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Snake/index.html"></iframe></div>`
    container.innerHTML += snake;
}

//deletes window
var closeWindow = (element) => {
    console.log("hello")
	element.parentNode.remove();
}

//makes window go to top when clicked
var goTop = (element) =>{
    let elements = document.getElementsByClassName('part-container');
    let zI = 0;
    for (var i = 0; i < elements.length; i++) {
        let index = parseInt(elements[i].style.zIndex);
        if(!index){index = 0}
        if(index>zI&&elements[i]!=element)
        {
            zI = index;
        }
    }
    element.style.zIndex = zI+1;
    zI=0;
}
