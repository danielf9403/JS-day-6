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


}