let addUserBtn = document.querySelector(".add-user-btn");
let testDiv = document.querySelector(".test");

let input = testDiv.childNodes[3];
let ul = testDiv.childNodes[7];
let liEl;
let delBtn;
let editBtn;

let editText;

function addUser() {
    // let student =  input.value;
    // let LSdata = localStorage.getItem("Student Name");
    // if (!LSdata) {
    //     LSdata = []
    // }
    // else{
    //     LSdata =(JSON.parse(LSdata));
    // }
    // LSdata.push(student);
    // input.value = '';
    // localStorage.setItem('Student Name', JSON.stringify(LSdata) )
    // console.log(LSdata);


  if (input.value.trim().length > 2 && addUserBtn.innerHTML === "Add User") {
    // creating li
    liEl = document.createElement("li");
    let liText = document.createTextNode(input.value);

    // creating delete btn
    delBtn = document.createElement("button");
    let delBtnTxt = document.createTextNode("Delete");
    delBtn.setAttribute("onclick", "delet(this)");
    delBtn.appendChild(delBtnTxt);
    liEl.appendChild(liText);
    liEl.appendChild(delBtn);

    // creating edit btn
    editBtn = document.createElement("button");
    let editBtnTxt = document.createTextNode("Edit");
    editBtn.setAttribute("onclick", "edit(this)");
    editBtn.appendChild(editBtnTxt);
    liEl.appendChild(editBtn);

    ul.appendChild(liEl);
    input.value = "";
  }
  if (addUserBtn.innerHTML === "update") {
    ToEdit.nodeValue = input.value;
    addUserBtn.innerHTML = "Add User";
    input.value = "";
    ToEdit.nextSibling.removeAttribute("disabled");
    ToEdit.nextSibling.nextSibling.removeAttribute("disabled");
  }
}
function delet(del) {
  ul.removeChild(del.parentNode);
}

let ToEdit;
function edit(edt) {
  ToEdit = edt.previousSibling.previousSibling;
  input.value = ToEdit.nodeValue;

  addUserBtn.innerHTML = "update";
  edt.setAttribute("disabled", "disabled");
  edt.previousSibling.setAttribute("disabled", "disabled");
}











// let inputEl = document.querySelectorAll('.inputEL')[0];

function addStd() {
    // let student =  inputEl.value;
    // let LSdata = localStorage.getItem("Student Name");
    // if (!LSdata) {
    //     LSdata = []
    // }
    // else{
    //     LSdata =(JSON.parse(LSdata));
    // }
    // LSdata.push(student);
    // inputEl.value = '';
    // localStorage.setItem('Student Name', JSON.stringify(LSdata) )
    // console.log(LSdata);
    
}
function Onload(){
    // let ul = document.querySelector('.ul');
    // let LSdata = JSON.parse(localStorage.getItem('Student Name'))
    // console.log(LSdata);
    // console.log(ul.childNodes);
    // for (let i = 0; i < LSdata.length; i++) {
    //     ul.innerHTML += `<li>${LSdata[i]}</li>`
    // }
}