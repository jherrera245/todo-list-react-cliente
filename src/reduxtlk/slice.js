import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import GetAll from "../services/GetAll"
import Create from "../services/Create"
import Update from "../services/Update"
import Delete from "../services/Delete"

export const fetchTaskData = createAsyncThunk(
  'todo/fetchTaskData', async () => {return await GetAll()}
)

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    taskList: await GetAll(),
  },
  reducers: {
    addTask: (state, action) => {
      const { todoNombre, todoDescripcion, todoEstado } = action.payload;
      //agregamos un nuevo objeto de tipo Task a la nuestro array

      const newTask = {
        todoNombre: todoNombre,
        todoDescripcion: todoDescripcion,
        todoEstado: todoEstado
      }
      
      Create(newTask)
    },
    checkTask: (state, action) => {
      const id = action.payload;
      const modState = {}

      state.taskList = state.taskList.map(task => {
        if (task._id === id) {
          task.todoEstado = (task.todoEstado === "pendiente") ? 'completado' : 'pendiente'
          modState.todoEstado = task.todoEstado
        }
        return task
      })

      Update(id, modState)
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.taskList = state.taskList.filter(
        item => item._id !== id
      );
      Delete(id)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskData.pending, (state) => {
        console.log('Loading Tasks')
      })
      .addCase(fetchTaskData.fulfilled, (state, action) => {
        console.log('Load Tasks is successfull')
        state.taskList = action.payload;
      })
      .addCase(fetchTaskData.rejected, (state, action) => {
        console.log('Error at load data')
      });
  },
});

//exportando modulos
export const { addTask, checkTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;