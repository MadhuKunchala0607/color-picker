document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const todoList = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '❌';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);

    document.getElementById('new-task').value = '';
});
