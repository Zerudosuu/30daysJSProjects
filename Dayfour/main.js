//getting all the elements in the DOM
const notesContainer = document.querySelector(`.notes-container`);
const createBtn = document.querySelector(`.btn`);
let note = document.querySelectorAll(`.input-box`);

//showing the notes list after the browser has loaded/refresh
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

//this function create a local storage object fot the notes
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

//creating an eventlistener to the butoon so that the button will be clicked
//creating a variable inputBox and storing the createElement function which creating element "p"
//same as the createElement function for image
//we set the className of the inputBox to input-box that is already been styled with css.
//as well as we set the image source to the specific source.
//getting the notesContainer we append or add the inputbox with the child element of img
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

//from the notesContainer we added an evenlistener element
//this function will with e params will target the notesContainer element that contains IMG
//if true then delete the parent container which is the notesContainer
//else if the user input or press the note the target element p will get the class input-box
//looping in every input-box the function will check if the certain note is selected and will return a value
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    note = document.querySelectorAll(`.input-box`);
    note.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
