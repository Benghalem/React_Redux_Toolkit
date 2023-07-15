import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInsert } from "./reportWebAction";

// creat AsyncThunk to handling and conect API 
export const getBooks = createAsyncThunk('book/getBooks', 

    async(data, thunkAPI) => {

    const { rejecteWithValues } = thunkAPI; // the server is down or something else when data is returned  
    try {
        const res = await fetch('http://localhost:3005/book');
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return rejecteWithValues(err.message);
    }
});

// creat AsyncThunk to handling inserBook request
export const insertBook = createAsyncThunk ('book/insertBooks', 

    async(bookData, thunkAPI) => {
        const { rejecteWithValues, getState, dispatch } = thunkAPI;  // the server is down or something else when data is returned  
        try {
        bookData.userNAME = getState().auth.name;
        const res= await fetch('http://localhost:3005/book', {
                method: 'POST',
                body: JSON.stringify(bookData),
                headers: {'Content-Type': 'application/json; charset=UTF-8' },
                
        } );             
            const data = await res.json();
            dispatch(logInsert({ name: 'insertBooks', state: 'success' }));
            return data;
        } catch (err) {
            dispatch(logInsert({ name: 'insertBooks', state: 'failed' }));
            return rejecteWithValues(err.message);
        }
    }

)

// creat AsyncThunk to handling delteBook 
export const delteBook = createAsyncThunk('book/delteBook', 
    async (item, thunkAPI) => {
        const { rejecteWithValues } = thunkAPI;  // the server is down or something else when data is returned  
        try {
            await fetch(`http://localhost:3005/book/${item.id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json; charset=UTF-8' },     
        } );          
            return item;         
        } catch (err) {
            return rejecteWithValues(err.message);
        }
})

// creat AsyncThunk to handling getBook info
export const getBookInf = createAsyncThunk('book/getBook', 
    async (item, thunkAPI) => {
        const { rejecteWithValues } = thunkAPI;  // the server is down or something else when data is returned  
        try {
            await fetch(`http://localhost:3005/book/${item.id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json; charset=UTF-8' },     
        } );        
            return item;         
        } catch (err) {
            return rejecteWithValues(err.message);
        }
})

// creat slice with extraReducer
const bookSlice = createSlice ({
    name:"book",
    initialState: { books: [], isLoading: false, error: null, bookInfo: null },
    extraReducers: {
        // get books
        [getBooks.pending]: (state, action) =>{ 
            state.isLoading = true; // handle loading
            state.error = null;       
        },
        [getBooks.fulfilled]: (state, action) =>{ 
            state.isLoading = false;
            state.books = action.payload;  // hanle the data for the action
            state.error = null;
        },
        [getBooks.rejected]: (state, action) =>{ 
            state.isLoading = false;    
            state.error = action.payload; // handle error
        },

        // insert book 
        [insertBook.pending]: (state, action) =>{
            state.isLoading = true; // handle loading
            state.error = null; 
        },
        [insertBook.fulfilled]: (state, action) =>{
            state.isLoading=false; // handle loading
            state.books.push(action.payload);
        },
        [insertBook.rejected]: (state, action) =>{
            state.isLoading = false;    
            state.error = action.payload; // handle error
        },

        // Delete book
        [delteBook.pending]: (state, action) =>{
            state.isLoading = true; // handle loading
            state.error = null; 
        },
        [delteBook.fulfilled]: (state, action) =>{
            state.isLoading=false; // handle loading
            state.books = state.books.filter(el => el.id !== action.payload.id); // removeBook numbr = id
        },
        [delteBook.rejected]: (state, action) =>{
            state.isLoading = true; // handle loading
            state.error = null; 
        },

        // Read book get info
        [getBookInf.fulfilled]: (state, action) =>{
            state.isLoading=false; // handle loading
            state.bookInfo = action.payload // 
        }
    
    }
});


export default bookSlice.reducer;