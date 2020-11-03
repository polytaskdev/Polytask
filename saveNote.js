saveNotes = () => {
    notes = document.getElementsByClassName('note');
    saveNoteData = [];
    for (note of notes) {
        iframe = note.getElementsByTagName('iframe')[0];
        header = iframe.contentWindow.document.getElementById('header').innerHTML;
        content = iframe.contentWindow.document.getElementById('content').innerHTML;
        noteinfo = new saveNote(header, content);
        saveNoteData.push(noteinfo);
    }
    saveNoteData = localStorage.setItem('saveNotes', JSON.stringify(saveNoteData));
};

function saveNote(header, content) {
    this.header = header;
    this.content = content;
}

window.addEventListener('unload', saveNotes);
window.addEventListener('beforeUnload', saveNotes);

loadNote = () => {
    notes = document.getElementsByClassName('note');
    saveNoteData = JSON.parse(localStorage.getItem('saveNotes'));
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];
        let iframe = note.getElementsByTagName('iframe');
        iframe[0].addEventListener('load', () => {
            iframe[0].contentWindow.document.getElementById('header').innerHTML = saveNoteData[i].header;
            iframe[0].contentWindow.document.getElementById('content').innerHTML = saveNoteData[i].content;
        });
    }
};

window.addEventListener('load', loadNote);
