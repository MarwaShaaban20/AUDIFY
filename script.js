// Selecting all required elements
const dropArea = document.querySelector(".drag-area"),
  dragText = dropArea.querySelector("header"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");
let file; // This is a global variable and we'll use it inside multiple functions

button.onclick = () => {
  input.click(); // If user clicks on the button then the input also clicked
};

input.addEventListener("change", function () {
  // Getting user selected file and [0] this means if user selects multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); // Calling function
});

// If user drags file over dropArea
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault(); // Preventing default behavior
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

// If user leaves dragged file from dropArea
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

// If user drops file on dropArea
dropArea.addEventListener("drop", (event) => {
  event.preventDefault(); // Preventing default behavior
  // Getting user selected file and [0] this means if user selects multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); // Calling function
});

function showFile() {
  let fileType = file.type; // Getting selected file type
  let validExtensions = ["audio/mpeg", "audio/wav", "audio/mp3"]; // Adding some valid audio extensions in array

  if (validExtensions.includes(fileType)) { // If user selected file is an audio file
    let fileReader = new FileReader(); // Creating new FileReader object
    fileReader.onload = () => {
      let fileURL = fileReader.result; // Passing user file source in fileURL variable
      let audioTag = `<audio controls><source src="${fileURL}" type="${fileType}">Your browser does not support the audio element.</audio>`; // Creating an audio tag and passing user selected file source inside src attribute
      dropArea.innerHTML = audioTag; // Adding that created audio tag inside dropArea container
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not an Audio File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
