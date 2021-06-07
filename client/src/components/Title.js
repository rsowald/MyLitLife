import React from 'react';
import { useAuth } from './authentication/context/AuthContext';
import './Title.css';

function Title() {
  const { currentUser } = useAuth();
  return (
    <div className="Title" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/My-Lit-Life_Title-Img.png)` }}>
      <h1 style={{ fontSize: "50px", backgroundColor: "rgba(247, 208, 101, .8)", borderRadius: "5px", padding: "8px" }}>Hello, {currentUser.displayName.split(' ')[0]}</h1>
    </div>
  )
}

export default Title;