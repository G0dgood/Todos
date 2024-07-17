import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import todoService from './todoService'
 import AsyncStorage from '@react-native-async-storage/async-storage';
   
const initialState:any = { 

  user:   null,
  isError: false,
  isSuccess: false,
  isLoading: false, 
  message: '', 

  
 
}
 

// todo   
export const createTodo = createAsyncThunk('todo/create', async (data, thunkAPI) => {
  try {
    return await todoService.createTodo()

  } catch (error: any) {  
    const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||error.response.data.errors[0].message
      error.message ||
      error.toString()  
    return thunkAPI.rejectWithValue(message)
  }
})

 

 

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    reset: (state) => {   
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''  
    },

      setUserInfo: (state, action) => {
      state.user = action.payload
    },

    logoutUser: state => {
      AsyncStorage.removeItem('eezy-user-info')
      state.user = null
    }
  },

  extraReducers: (builder) => {
    builder
      //  Login
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload 
      }) 
      .addCase(createTodo.rejected, (state:any, action) => {
        state.isLoading  = false
        state.isError  = true
        state.message  = action.payload
        state.data  = [] 
      })

      
 
      
  },
})

export const { reset  } = todoSlice.actions
export default todoSlice.reducer




 