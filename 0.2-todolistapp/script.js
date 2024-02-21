const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function(e) { // listen for click in listContainer
  if (e.target.tagName === "LI") { // if LI tag was clicked
    e.target.classList.toggle("checked"); // toggle the class checked or blank
    saveData();
  } else if (e.target.tagName === "SPAN") { // if SPAN tag was clicked
    e.target.parentElement.remove(); // delete the parent element (LI)
    saveData();
  }
}, false);

// add local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

loadData();