const inputtd = document.querySelector('#input')
const buttontd = document.querySelector('.buttoninput')
const listtd = document.querySelector('.todo_list')

function addTodo() {
    const items = document.createElement('div')
    items.classList.add('items')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtd.value
    items.appendChild(item)

    if (inputtd.value === '') return

    const check = document.createElement("button")
    check.innerHTML = '<i class="fa-solid fa-check"></i>'
    check.classList.add("check-button")
    items.appendChild(check)

    const trash = document.createElement("button")
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trash.classList.add("trash-button")
    items.appendChild(trash)

    listtd.appendChild(items)
    inputtd.value = ''
}
function clickButton(e) {
    e.preventDefault();
    addTodo();
}

function checkdel(e) {
    const item = e.target

    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontd.addEventListener('click', clickButton)
listtd.addEventListener('click', checkdel)