import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className="left">
        <a> Home </a>
      </div>
      <div className="left">
      <a href="/Characters">Characters</a>
        <a href='/Location'> Location </a>
        <a href='/Episode'> Episode</a>
      </div>
    </div>
  )
}

export default Header;

