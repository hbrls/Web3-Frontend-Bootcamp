import { useEffect, useState } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Todo } from './typings';


function init(): Array<Todo> {
  const storedList = localStorage.getItem('todoList');
  return storedList ? JSON.parse(storedList) : [];
}


export default function App() {
  const [ todoList, setToDoList ] = useState<Array<Todo>>(init);

  function onAdd(content: string) {
    const newItem: Todo = {
      id: Date.now(),
      content: content,
      completed: false
    }
    setToDoList([ newItem, ...todoList ]);
  }

  function onToggle(id: number) {
    const item = todoList.find(item => item.id === id);
    if (item) {
      item.completed = !item.completed;
      setToDoList([ ...todoList ]);
    }
  }

  function onDel(id: number){
    const remains = todoList.filter(item => item.id !== id);
    setToDoList(remains);
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])

  return (
    <div className="prose mt-8 app">
      <Header />
      <AddTodo onSubmit={onAdd} />
      <TodoList dataSource={todoList} onToggle={onToggle} onDel={onDel} />
    </div>
  );
}
