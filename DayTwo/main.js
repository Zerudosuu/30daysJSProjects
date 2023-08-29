const inputBox = document.querySelector(`#input-box`);
const listcontainer = document.querySelector(`#list-container`);
const addButton = document.querySelector(`.add-task`);

addButton.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Please write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = `\u00d7`;
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
});

listcontainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === `LI`) {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

const savedata = () => {
  localStorage.setItem("data", listcontainer.innerHTML);
};

const showlist = () => {
  listcontainer.innerHTML = localStorage.getItem("data");
};

showlist();
