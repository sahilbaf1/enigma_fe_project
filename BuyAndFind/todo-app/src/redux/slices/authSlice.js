import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodosThunk = createAsyncThunk('auth/login', async() =>{
    return await fetchTodos();
})

export const addTodosThunk = createAsyncThunk('todos/addTodos', async(title) => {
    return await addTodosThunk(title);
})

export const toggleThunk = createAsyncThunk('todos/toggleTodo', async() => {
    return await toggleTodo();
})

export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', async(id) => {
    return await deleteTodo(id);
})

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducer : {},
    extraReducers: (builder) => {
        builder.
            addCase(fetchTodosThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodosThunk.fulfilled, (state,action) => {
                state.loading = false;
                state.items = action.payload
            })
            .addCase(fetchTodosThunk.rejected, (state,action) => {
                state.loading = false;
                state.error = "Failed to fetch todos"
            })
            .addCase(fetchTodosThunk.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(fetchTodosThunk.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id == action.payload.id)
                if (index !== -1) {
                    state.items[index] = action.payload;
            }
        })
        .addCase(fetchTodosThunk.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id == action.payload.id)
        })
    }

})

export default todoSlice.reducer