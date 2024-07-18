import AsyncStorage from '@react-native-async-storage/async-storage';

// Create Todo
const createTodo = async (todo: any) => {

  const todos = await AsyncStorage.getItem('todos');
  const todosArray = todos ? JSON.parse(todos) : [];
  todosArray.push(todo);
  await AsyncStorage.setItem('todos', JSON.stringify(todosArray)); 
  return todo;
};

// Fetch Todos
const fetchTodos = async () => {
  const todos = await AsyncStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const clearTodos = async () => { 
    await AsyncStorage.removeItem('todos');
  return;
};

const todoService = {
  createTodo,
  fetchTodos,
  clearTodos
};

export default todoService;
