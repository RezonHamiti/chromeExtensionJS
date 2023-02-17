const inputBtn = document.querySelector("#input-btn");
const inputElement = document.querySelector("#input-element");
const ulElement = document.querySelector("#ul-element");

let myLeads = [];

inputBtn.addEventListener("click", saveInput);

function saveInput() {
  myLeads.push(inputElement.value);
  renderLeads();
  // clear the input field onclick
  if (inputElement.value != "") {
    inputElement.value = "";
  }
}

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // place input in a tag so it can be clicked, open new browser with target='_blank'
    listItems += `
        <li> 
          <a target='_blank' href= '${myLeads[i]}'>
            ${myLeads[i]}
          </a>
        </li>
    `;
  }
  // render the myLeads items inside the ul
  ulElement.innerHTML = listItems;
}
