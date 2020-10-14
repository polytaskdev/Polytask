document.addEventListener('load',()=>{

})

var search = () => {
    input = document.getElementById('search').value;
    console.log(input);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('word').innerHTML = data[0].word;
            document.getElementById('phonetics').innerHTML = data[0].phonetics[0].text;
            definitions = document.getElementById('definition-container')
            definitions.innerHTML = ""
            for(let i = 0; i < data[0].meanings.length; i++){
                definitions.innerHTML += `<div class = "meaning-container"></div>`
                meanings = document.getElementsByClassName('meaning-container');
                meanings[i].innerHTML += `<h4>${data[0].meanings[i].partOfSpeech}</h4>`
                for(let j = 0; j < data[0].meanings[i].definitions.length; j++){
                    meanings[i].innerHTML += `<p>${data[0].meanings[i].definitions[j].definition}</p>`
                }
            }
        })
}
