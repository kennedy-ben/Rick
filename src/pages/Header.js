import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className="left">
        <a> Home </a>
      </div>
      <div className="left">
      <a href="/">Characters</a>
        <a href='/'> Location </a>
        <a href='/'> Episode</a>
      </div>
    </div>
  )
}

export default Header;

