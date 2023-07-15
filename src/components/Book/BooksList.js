import React from 'react';

const BooksList = ({isLoading, books, isLoggedIn, delteBook, dispatch, getBookInf , getBookId}) => {

  // affiche list books if available or not
  const BookList = books.length > 0 ? books.map((item) => (
    <li className='list-group-item d-flex  justify-content-between align-items-center'  key={item.id} > 
    <div> {item.titel}</div>
    <div className='btn-group' role='group'>
      <button type='button' className='btn btn-primary'
              onClick={() => getBookId(item.id)} 
             /* onClick={() => dispatch(getBookInf(item))
            } */
      >
        Read
      </button>

      <button type='button' className='btn btn-danger' 
              disabled= {!isLoggedIn}
              onClick={() => dispatch(delteBook(item))
                .unwrap()
    .then((originalPromiseResult) => {
      console.log(originalPromiseResult);
    })
    .catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError);
    })
}
      >
        Delete
      </button>
    </div>
  </li>
  )): 'Ther is no books avaliable'

  return (
    <div>
      <h2>Books List</h2>

      { /* creat loading indicator */ }
      {
      isLoading ? ('loading...'
      ) : (
        <ul className='list-group'> {BookList}</ul>
      )}     
    </div>
  );
};

export default BooksList;
