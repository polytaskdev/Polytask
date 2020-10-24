function showTaps(event, tapName) {
    let tabContent = document.getElementsByClassName("tabContent");
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" opened", "");
    }
    document.getElementById(tapName).style.display = "block";
    event.currentTarget.className += " opened";
}
