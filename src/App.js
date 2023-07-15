import React, { Fragment } from 'react';
/* import { Route, Routes, Navigate } from 'react-router-dom'; 
import Signup from './components/Signup/signup';
import Login from './components/Login/login'; */

import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';


const App = () => {

 /*  const user = localStorage.getItem('token'); */
  return (
    <Fragment>
      {/* <Routes> 
        {user && <Route path="/" exact element= { <Header />  } />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/add" exact element={<Navigate replace to="/login" />} />
      </Routes> */}
         <Header />
        <Container>
          <AddForm />
          <BookContainer />
        </Container> 
       
    </Fragment>
  );
};

export default App;
