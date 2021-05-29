import React from 'react';
import { useAuth } from './authentication/context/AuthContext';
import './Title.css';

function Title() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div className="Title" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/My-Lit-Life_Title-Img.png)` }}>
      <h1 className="display-4">Hello, {currentUser.displayName.split(' ')[0]}</h1>
    </div>
  )
}

export default Title;