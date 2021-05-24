import React from 'react'
import './Title.css';

function Title() {
    const { currentUser } = useAuth();
    console.log(currentUser);

  return (
    <div className="Title">
      <h1 className="display-4">Hello, {currentUser.displayName.split(' ')[0]}</h1>
      </div>
  )
}

export default Title;