const addBtn = document.querySelector("#addBtn")
addBtn.addEventListener("click", function(){
    addNotes()
})

const main = document.querySelector(".main")

const saveNote = () =>{
    const notesValue = document.querySelectorAll(".note textarea");
    const data = []
    notesValue.forEach((text) => data.push(text.value));

    localStorage.setItem("notes", JSON.stringify(data))
} 

const addNotes = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
        <div class="tool">
            <i class="trash fas fa-trash"></i>
            <i class="save fas fa-save"></i>
        </div>
        <textarea>${text}</textarea>`
    
    note.querySelector(".trash").addEventListener("click", function(){
        note.remove();
        saveNote();
    })

    note.querySelector(".save").addEventListener("click", function(){
        saveNote()
    })

    note.querySelector("textarea").addEventListener("focusout", function(){
        saveNote()
    })

    main.appendChild(note);
    saveNote()
}

(
    function(){
        const notes = JSON.parse(localStorage.getItem("notes"));
        console.log(notes);
        if(notes === null || notes.length === 0){
            addNotes()
        }else{
            notes.forEach((note) => addNotes(note))
        }
    }
)()
