import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, delteBook, getBookInf } from '../../store/bookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const PostContainer = () => {
  

  // Get books from store (listing from Reducer books)
  const {isLoading, books, bookInfo } = useSelector((state) => state.books)

     // login desable and enable (listing from Reducer authSlice)
  const {isLoggedIn} = useSelector(state => state.auth)

  // Create dispatch with useEffect to listen 
  const dispatch = useDispatch();

  console.log('rerender')
  const getBookId = (id) => {
    const selectedBook = books.filter((item) => item.id === id);
    console.log(selectedBook);

  }

  useEffect(()=>  {
      dispatch(getBooks());
  }, [dispatch]);

 /*  const gitBookId = (id) => {
    console.log(id)
  
  } */



  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList 
            isLoading = {isLoading} 
            books = {books} 
            isLoggedIn = {isLoggedIn} 
            delteBook ={delteBook} 
            dispatch = {dispatch}
            getBookInf = {getBookInf}
            getBookId = {getBookId}
          />
        </div>
        <div className='col side-line'>
          <BookInfo 
           bookInfo = {bookInfo}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
