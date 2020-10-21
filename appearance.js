//changes the theme of the website
//changes the variables that need to be changed
var appearance = 'auto'
function darkmode(){
    document.documentElement.style.cssText = "--primary: rgb(20,23,30);--secondary: rgb(30,35,40);--header: rgb(20,23,30,0.75);--header-secondary: rgb(30,35,40,0.4);--text: rgb(230,230,230);--text-secondary: rgb(210,210,210);--shadow: rgb(0,0,0,0.1);--shadow-dark: rgb(0,0,0,0.5);"
    appearance = 'dark'
}
function lightmode(){
    document.documentElement.style.cssText = "--primary: white;--secondary: rgb(240,240,240);--header: rgb(255,255,255,0.75);--header-secondary: rgb(220,220,220,0.4);--text: black;--text-secondary: rgb(30,30,30);--shadow: rgb(0,0,0,0.03);--shadow-dark: rgb(0,0,0,0.2);"
    appearance = 'light'
}
function auto(){
    appearance = 'auto'
    document.documentElement.style.cssText = ""
}
