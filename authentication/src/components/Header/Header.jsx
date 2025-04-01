import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {Container , LogoutBtn} from '../index'


export default function(props) {

  const authStatus = useSelector((state) => state.auth.authStatus);
  const navigate = useNavigate();

  //navigation Items
  const navItems = [
    {
      name : "Home",
      slug : "/",
      active : true,
    },
    {
      name : "Login",
      slug : "/login",
      active : !authStatus,
    },
    {
      name : "Signup",
      slug : "/signup",
      active : !authStatus,
    },
    {
      name : "All Posts",
      slug : "/all-posts",
      active : authStatus,
    },
    {
      name : "Add Post",
      slug : "/add-post",
      active : authStatus,
    },
  ]

    return (
        <header className="py-3 shadow bg-gray-500">
          <Container>
            <nav className='flex'>
              <div className='mr-4'>
                <Link to="/">
                  <h1>Lg</h1>
                </Link>
              </div>
              <ul className='flex ml-auto'>
                {navItems.map((item) => 
                  item.active ? (
                    <li key={item.name}>
                      <button 
                        onClick={() => navigate(item.slug)}
                        className='inline-block py-2 px-6 duration-200 hover:bg-blue-200 rounded-full'
                      >{item.name}</button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </nav>
          </Container>
        </header>
      );
    }

    // <nav className="navbar">
    //         <h1>OAuth</h1>
    //         <div className="auth-container">
    //           <div className="toggle-btns">
    //             <span
    //               className={`toggle-option ${isLogin ? "active" : ""}`}
    //               onClick={setLogin}
    //             >
    //               Login
    //             </span>
    //             <span
    //               className={`toggle-option ${!isLogin ? "active" : ""}`}
    //               onClick={setLogin}
    //             >
    //               Signup
    //             </span>
    //             <div className={`slider ${isLogin ? "left" : "right"}`}></div>
    //           </div>
    //         </div>
    //       </nav>