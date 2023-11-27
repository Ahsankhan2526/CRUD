let addUserBtn = document.querySelector(".add-user-btn");

let testDiv = document.childNodes[1].childNodes[2].childNodes[3]
console.log('testDiv: ', testDiv);

let input = testDiv.childNodes[3];
let ul = testDiv.childNodes[7];
let liEl;
let delBtn;
let editBtn;

let editText;

function edit(edt) {
    // ul.removeChild(edt.parentNode);
    let ulParent = edt.parentNode.parentNode;
    console.log('ulParent: ', ulParent);
    let editChild = edt.parentNode;
    console.log('editChild: ', editChild);
    editText = editBtn.previousSibling.previousSibling
    console.log('editText: ', editText , typeof(editText));
    input.value = editText.nodeValue;
    addUserBtn.innerHTML = 'update';
    editBtn.setAttribute('disabled', 'disabled')
    delBtn.setAttribute('disabled', 'disabled')


}

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
    editText.nodeValue = input.value;
    addUserBtn.innerHTML ='Add User';
    input.value = '';
    editBtn.removeAttribute('disabled');
    delBtn.removeAttribute('disabled');

}
}

function delet (del) {
    ul.removeChild(del.parentNode);
}











