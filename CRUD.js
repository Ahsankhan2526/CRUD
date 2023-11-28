let addUserBtn = document.querySelector(".add-user-btn");

let testDiv = document.childNodes[1].childNodes[2].childNodes[3]
// console.log('testDiv: ', testDiv);

let input = testDiv.childNodes[3];
let ul = testDiv.childNodes[7];
let liEl;
let delBtn;
let editBtn;

let editText;



function addUser(){
    if (input.value.trim().length > 2 && addUserBtn.innerHTML === 'Add User') {
        // creating li
        liEl = document.createElement('li');
        let liText = document.createTextNode(input.value);
        
        // creating delete btn
        delBtn = document.createElement('button');
        let delBtnTxt = document.createTextNode('Delete');
    delBtn.setAttribute('onclick', 'delet(this)')
    delBtn.appendChild(delBtnTxt);
    liEl.appendChild(liText);
    liEl.appendChild(delBtn);
    
    // creating edit btn
    editBtn = document.createElement('button');
    let editBtnTxt = document.createTextNode('Edit');
    editBtn.setAttribute('onclick', 'edit(this)')
    editBtn.appendChild(editBtnTxt);
    liEl.appendChild(editBtn);
    
    ul.appendChild(liEl);
    input.value = ''
}
if (addUserBtn.innerHTML === 'update') {
    ToEdit.nodeValue = input.value;
    addUserBtn.innerHTML ='Add User';
    input.value = '';
    ToEdit.nextSibling.removeAttribute('disabled');
    ToEdit.nextSibling.nextSibling.removeAttribute('disabled');

}
}
function delet (del) {
    ul.removeChild(del.parentNode);
}


let ToEdit;
function edit(edt) {
    ToEdit = edt.previousSibling.previousSibling;    
    input.value = ToEdit.nodeValue;
    
    
    
    
    
    
    
    // console.log('edt: ', edt);
    // let ulParent = edt.parentNode.parentNode;
    // let editChild = edt.parentNode;
    // editText = editChild.childNodes[0].nodeValue;
    
    addUserBtn.innerHTML = 'update';
    edt.setAttribute('disabled', 'disabled')
    edt.previousSibling.setAttribute('disabled', 'disabled')
}







