const inputBtn = document.querySelector("#input-btn");
const inputElement = document.querySelector("#input-element");
const ulElement = document.querySelector("#ul-element");

let myLeads = ["lol", "lel", "lal"];

inputBtn.addEventListener("click", saveInput);

function saveInput() {
  myLeads.push(inputElement.value);
  renderLeads();
  // clear the input field onclick
  if(inputElement.value != "") {
    inputElement.value = "";
  }
}

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
    console.log(listItems);
  }
  // render the myLeads items inside the ul 
  ulElement.innerHTML = listItems;
}

