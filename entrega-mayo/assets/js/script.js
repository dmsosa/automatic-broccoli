// function submitHandler(event) {
//   event.preventDefault();
//   console.log(event);
// }
import { isValidHttpUrl } from './helper.js';
import svgsObject from './svgs.js';


const pokeForm = document.getElementById('pokemon-form');
const cancelBtn = pokeForm.querySelector('.app-form-buttons .btn-danger');
if (!cancelBtn) console.error('no cancel button found for this form\n', pokeForm);
cancelBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
  const parentForm = event.currentTarget.parentElement.parentElement;
  if (!parentForm) console.error('no parentForm found for this cancel button\n', event.currentTarget);
  parentForm.reset();
  
})
pokeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const controlledTableId = form.getAttribute("aria-controls");
  const controlledTable = document.getElementById(controlledTableId);
  const row = document.createElement('tr');
  for (const [key, value] of formData.entries()) {
    const td = document.createElement('td');
    let dataElement;
    if (["name", "types"].includes(key))
    {
      dataElement = document.createElement('span');
      dataElement.innerText = value;
    }
    else if (["seen"].includes(key))
    {
      dataElement = document.createElement('i');
      dataElement.classList.add('icon')
      if (value)
      {
        console.log(value, 'for seen checkbox')
      }
      dataElement.innerHTML = svgsObject.check;
    }
    else if (["imgurl"].includes(key))
    {
      
      dataElement = document.createElement('img');
      dataElement.classList.add('table-td-img');
      dataElement.src = isValidHttpUrl(value) ? new URL(value) : '../images/nopkmn.png';
    }
    else {
      console.log("Key for this form was not found, value not added\n");
    }
    td.append(dataElement);
    row.append(td);
  }
  controlledTable.append(row);

});