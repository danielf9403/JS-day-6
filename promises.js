let document = ["creative writing.dox", "taxes.pdf", "syllabus.pdf", "final project.pptx"]
let documentUl = document.querySelector('document-list')

document.forEach(function(documentName) {
    let documentLi = document.createElement('li');
    documentLi.textContent = documentName;

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    documentLi.append(deleteButton)

    deleteButton.addEventListener('click', function() {
        getUserConfirmation()
    })

    documentUl.append(documentLi)   
})

function getUserConfirmation() {
    let modalDiv = document.createElement('div')

    modalDiv.style.padding = '10px';
    modalDiv.style.position = 'absolute';
    modalDiv.style.backgroundColor = 'white';
    modalDiv.style.border = '1px solid balck';
    modalDiv.style.width = '50%';
    modalDiv.style.height = '100px';
    modalDiv.style.left = '20%';
    modalDiv.style.top = '20px';


    let modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.textContent = 'Are you sure you want to delete this document?'

    modalDiv.append(modalHeaderDiv)

    let confirmButton = document.createElement('button');
    confirmButton.textcontent = 'Confirm'

    let cancelButton = document.createElement('button');
    cancelButton.textcontent = 'Cancel'

    modalDiv.append(confirmButton, cancelButton)

    confirmButton.addEventListener('click', function() {

    })

    cancelmButton.addEventListener('click', function() {
        
    })

    document.body.append(modalDiv)

}