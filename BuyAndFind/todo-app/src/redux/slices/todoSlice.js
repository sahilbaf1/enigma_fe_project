import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://159.223.48.190:8080/api/v1/'

export const fetchProduct = createAsyncThunk('products/fetchAll', 
    async() => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data;
        } catch (error) {
            throw Error("Failed to Retrieve the Data")
        }
    }
)

export const productDetail = createAsyncThunk('products/fetchDetail',
    async(productId) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                productId
            });
            return response.data;
        } catch(error) {
            throw Error ('Failed to get Product Detail')
        }
    }
)

export const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
        selectedProduct: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.items = (action.payload)
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(productDetail.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(productDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedProduct = (action.payload)
        })
    }
})

export default productSlice.reducer;

// export const fetchTodosThunk = createAsyncThunk('todos/fetchTodos', async() =>{
//     return await fetchTodos();
// })

// export const addTodosThunk = createAsyncThunk('todos/addTodos', async(title) => {
//     return await addTodosThunk(title);
// })

// export const toggleThunk = createAsyncThunk('todos/toggleTodo', async() => {
//     return await toggleTodo();
// })

// export const deleteTodoThunk = createAsyncThunk('todos/deleteTodo', async(id) => {
//     return await deleteTodo(id);
// })

// const todoSlice = createSlice({
//     name: 'todos',
//     initialState: {
//         items: [],
//     },
//     reducer : {},
//     extraReducers: (builder) => {
//         builder.
//             addCase(fetchTodosThunk.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(fetchTodosThunk.fulfilled, (state,action) => {
//                 state.loading = false;
//                 state.items = action.payload
//             })
//             .addCase(fetchTodosThunk.rejected, (state,action) => {
//                 state.loading = false;
//                 state.error = "Failed to fetch todos"
//             })
//             .addCase(fetchTodosThunk.fulfilled, (state, action) => {
//                 state.items.push(action.payload);
//             })
//             .addCase(fetchTodosThunk.fulfilled, (state, action) => {
//                 const index = state.items.findIndex(item => item.id == action.payload.id)
//                 if (index !== -1) {
//                     state.items[index] = action.payload;
//             }
//         })
//         .addCase(fetchTodosThunk.fulfilled, (state, action) => {
//             state.items = state.items.filter(item => item.id == action.payload.id)
//         })
//     }

// })

// export default todoSlice.reducer