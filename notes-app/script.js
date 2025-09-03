// Select elements
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

// Load notes from localStorage or set empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Function to display notes
function displayNotes() {
  // Clear container
  notesContainer.innerHTML = "";

  // Loop through notes and create note cards
  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");

    const noteText = document.createElement("p");
    noteText.textContent = note;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete-btn");

    // Delete functionality
    deleteBtn.addEventListener("click", () => {
      deleteNote(index);
    });

    noteCard.appendChild(noteText);
    noteCard.appendChild(deleteBtn);
    notesContainer.appendChild(noteCard);
  });
}

// Function to add note
function addNote() {
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Note cannot be empty!");
    return;
  }

  // Add to array
  notes.push(noteText);

  // Save to localStorage
  localStorage.setItem("notes", JSON.stringify(notes));

  // Update UI
  displayNotes();

  // Clear input
  noteInput.value = "";
}

// Function to delete note
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

// Event listener
addBtn.addEventListener("click", addNote);

// Show notes on page load
displayNotes();
