import React, { Fragment } from 'react';

const BookInfo = ({bookInfo}) => {
 

  const BookInfo = bookInfo !== null ? <div  >
        <p className='fw-bold'>Title:{bookInfo.titel} </p>
        <p className='fw-light'>Description:{bookInfo.description}</p>
        <p className='fst-italic'>Price: {bookInfo.price}</p>
      </div>
      : <div className='alert alert-secondary' role='alert'>
          There is no book selected yet. Please select!
        </div> 
        


  
  return (
    <Fragment>
      <h2>Book Details</h2>
      {BookInfo}
    
      {/* <div className='alert alert-secondary' role='alert'>
        There is no book selected yet. Please select!
      </div>  */}
      {/* <div>
        <p className='fw-bold'>Title:</p>
        <p className='fw-light'>Description:</p>
        <p className='fst-italic'>Price:</p>
      </div> */}
    </Fragment>
  );
    }

export default BookInfo;
