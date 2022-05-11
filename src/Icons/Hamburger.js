import React from 'react'

const Hamburger = ({className, onClick}) => {
  return (
    <svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="currentColor" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>
  )
}

export default Hamburger