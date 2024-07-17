import AsyncStorage from '@react-native-async-storage/async-storage'; 
 
 
 
 
 
// Created Todo List  
const createTodo = async ( ) => { 
    const userInfo = await AsyncStorage.getItem('todo_info')  
  return userInfo
}
  

 
 
  

const authService = { 
 
  createTodo,  
   
}

export default authService
