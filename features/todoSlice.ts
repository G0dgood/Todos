import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import todoService from './todoService';

interface Todo {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  notes: string;
  isCompleted: boolean;
}

interface TodoState {
  todos: Todo[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: TodoState = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const createTodo = createAsyncThunk('todo/create', async (todo: Todo, thunkAPI) => {
  try {
    const createdTodo = await todoService.createTodo(todo);
    return createdTodo;
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchTodos = createAsyncThunk('todo/fetch', async (_, thunkAPI) => {
  try {
    const fetchedTodos = await todoService.fetchTodos();
    return fetchedTodos;
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const clearTodos = createAsyncThunk('todo/clear', async (_, thunkAPI) => {
  try {
    await todoService.clearTodos();
    return [];
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    clearTodos: (state) => {
      state.todos = []; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
