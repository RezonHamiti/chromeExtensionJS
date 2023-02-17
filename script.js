const inputBtn = document.querySelector("#input-btn");
const inputElement = document.querySelector("#input-element");
const ulElement = document.querySelector("#ul-element");
const deleteBtn = document.querySelector("#input-delete");
let myLeads = [];

const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"));

inputBtn.addEventListener("click", saveInput);
deleteBtn.addEventListener("dblclick", deleteInput);

function deleteInput() {
  localStorage.clear();
  myLeads = [];
  ulElement.innerHTML = null;
}

// get leads from the localStorage
if (leadsFromLocal) {
  myLeads = leadsFromLocal;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // place input in a tag so it can be clicked, open new browser with target='_blank'
    listItems += `
        <li> 
          <a target='_blank' href= '${leads[i]}'>
            ${leads[i]}
          </a>
        </li>
    `;
  }
  // render the myLeads items inside the ul
  ulElement.innerHTML = listItems;
}

function saveInput() {
  myLeads.push(inputElement.value);
  // clear the input field onclick
  inputElement.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  // log the local storage
  console.log(localStorage.getItem("myLeads"));
}
