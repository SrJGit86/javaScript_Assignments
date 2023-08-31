let textArea = document.getElementById("text_area");
let color = document.getElementById("choose_clr");
let addBtn = document.getElementById("add_btn");
let addedNotes = [];

addBtn.addEventListener("click", newNote);

function newNote() {
    if (textArea.value) {
        let newNote = {
            note: textArea.value,
            noteclr: color.value
        }
        addedNotes.push(newNote);
    } else {
        alert("A note can't be empty");
    }

    textArea.value = "";
    textArea.focus();

    showNotes(addedNotes);
}

document.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        newNote();
    }
})
let addedNotesArea = document.getElementById("added_notes");

function showNotes(notes) {
    addedNotesArea.innerHTML = " ";
    notes.forEach(element => {
        let noteHTML = `
        <div id="note" style="background-color:${element.noteclr};">
            <div id="note-view">
                ${element.note}
            </div>
            <div>
                <a id="delBtn">Del</a>
            </div>
        </div>
        `;

        addedNotesArea.insertAdjacentHTML('afterbegin', noteHTML);
        let deleteButton = document.getElementById("delBtn");


        deleteButton.addEventListener('click', e => { deleteNote(e, element) });
    });
}

function deleteNote(e, element) {
    let item = e.target.parentElement.parentElement.parentElement;
    // console.log(item);
    item.parentNode.removeChild(item);
    addedNotes.pop(element);
}