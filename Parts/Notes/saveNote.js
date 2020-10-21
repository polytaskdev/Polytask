saveNote = () => {
    localStorage.setItem('header',document.getElementById('header').innerHTML);
    localStorage.setItem('content',document.getElementById('content').innerHTML);
}
window.addEventListener('unload',saveNote);
window.addEventListener('beforeUnload',saveNote);

loadNote = () => {
    document.getElementById('header').innerHTML = localStorage.getItem('header');
    document.getElementById('content').innerHTML = localStorage.getItem('content');
}

window.addEventListener('load',loadNote);