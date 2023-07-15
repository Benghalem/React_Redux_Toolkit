import { configureStore } from "@reduxjs/toolkit";
import books from './bookSlice';
import auth from './authSlice';
import report from './reportWebAction';

export default configureStore({
    reducer: {books, auth, report},
});