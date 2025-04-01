import React from 'react';
import './App.css'

import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

//authentication import
import {login, logout} from './store/authSlice';
import authService from './appwrite/auth.service';

//components
import {Container, Header, Footer} from './components/index.js'

function App() {

  const [isLogin, setIsLogin] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    authService.getCurrentUser()
               .then((userData) => {
                if(userData) {
                  useDispatch(login({userData}));
                } else {
                  useDispatch(logout());
                }
               })
               .finally(() => {setLoading(false)})
  },[])

  function handleSetLogin() {
    setIsLogin(prev => !prev);
  }
  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header setLogin = {handleSetLogin} isLogin = {isLogin}/>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
