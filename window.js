

//creates a new calculator window
var addCalculator = () => {
    container = document.getElementById('main-container');
    calculator = `<div class="part-container calculator" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>calculator</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Calculator/index.html"></iframe></div>`
    container.innerHTML += calculator;
}

//creates a new snake windowss
var addSnake = () => {
    container = document.getElementById('main-container');
    snake = `<div class="part-container snake" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>snake</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Snake/index.html"></iframe></div>`
    container.innerHTML += snake;
}

var addDictionary = () => {
    container = document.getElementById('main-container');
    dictionary = `<div class="part-container dictionary" onmousedown = "goTop(this)" style="z-index:${returnTop()}"><div class="drag-bar" onmousedown="dragStart(this)"><p>dictionary</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Dictionary/index.html"></iframe></div>`
    container.innerHTML += dictionary;
}

//deletes window
var closeWindow = (element) => {
	element.parentNode.remove();
}

//makes window go to top when clicked
var goTop = (element) =>{
    let elements = document.getElementsByClassName('part-container');
    let zI = 0;
    for (let i = 0; i < elements.length; i++) {
        let index = parseInt(elements[i].style.zIndex);
        if(!index){index = 0}
        if(index > parseInt(element.style.zIndex)&& element != elements[i]){
            elements[i].style.zIndex = parseInt(elements[i].style.zIndex)-1
        }
        if(index>zI){
            zI = index;
        }
    }
    element.style.zIndex = zI;
    zI=0;
}

// returns the highest z-index so that all of the windows have differnt z-indexes
var returnTop = () => {
    let elements = document.getElementsByClassName('part-container');
    let zIndex = 0;
    for (let i = 0; i < elements.length; i++) {
        let index = parseInt(elements[i].style.zIndex);
        if(!index || index < 1){index = 0;elements[i].style.zIndex = 0}
        console.log(index)
        if(index > zIndex){zIndex = index}

    }

    return(zIndex+1)
}



//saving notes in localStorage so they don't disappear when reloaded
function saveWindow(posX,posY,zI,width,height,type){
    this.posX = posX;
    this.posY = posY;
    this.zI = zI;
    this.width = width;
    this.height = height;
    this.type = type;
}

//makes json file and saves the windows
function saveWindows(){
    let savedata = [];
    let savedWindows = document.getElementsByClassName('part-container');
    for(let i = 0; i<savedWindows.length;i++){
        let win = savedWindows[i];
        savedata[i] = new saveWindow(win.style.left, win.style.top, win.style.zIndex, win.style.width, win.style.height, win.classList[1]);

    }
    localStorage.setItem('savedWindows',JSON.stringify(savedata));

}

window.addEventListener('beforeUnload',() => {saveWindows()})
window.addEventListener('unload',() => {saveWindows()})

//loads in the saved windows
function loadWindows(){
    let savedata = JSON.parse(localStorage.getItem('savedWindows'));
    container = document.getElementById('main-container');
    for(let i = 0; i<savedata.length; i++){
        switch (savedata[i].type) {
            case 'calculator':
                calculator = `<div class="part-container calculator" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>calculator</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Calculator/index.html"></iframe></div>`
                container.innerHTML += calculator;
                break;
            case 'dictionary':
                dictionary = `<div class="part-container dictionary" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>dictionary</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Dictionary/index.html"></iframe></div>`
                container.innerHTML += dictionary;
                break;
            case 'snake':
                snake = `<div class="part-container snake" onmousedown = "goTop(this)" style="z-index:${savedata[i].zI};left:${savedata[i].posX};top:${savedata[i].posY};width:${savedata[i].width};height:${savedata[i].height}"><div class="drag-bar" onmousedown="dragStart(this)"><p>snake</p></div><button onclick="closeWindow(this)">×</button><iframe src="Parts/Snake/index.html"></iframe></div>`
                container.innerHTML += snake;
                break;
            default:

        }
    }
}

window.addEventListener('load',loadWindows);
