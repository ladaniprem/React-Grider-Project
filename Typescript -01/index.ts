import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    // Since res.data is an array, select the first todo item
    const todoItem = Array.isArray(res.data) ? res.data[0] : res.data;
    if (todoItem && typeof todoItem.completed === 'boolean') {
        const todo = todoItem as Todo;
        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logTodo(id, title, completed);
    } else {
        console.log('Invalid todo item received from API.');
    }
});

function logTodo(id: number, title: string, completed: boolean) {
    console.log(`id: ${id}`);
    console.log(`Title: ${title}`);
    console.log(`completed: ${completed}`);
}
