import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const NavbarButton = styled(Link)`
    padding:20px;
    cursor:pointer;
    text-decoration:none;
    background: #FFFFFF;
    opacity: 0.5;
    width:70px;
    height:5px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:20px;
    right:15px;
    border-radius:3px;
    font-weight:bold;


`;

function Button() {
  return (
    <div>
        <NavbarButton to="/login" >Login</NavbarButton>
    </div>
  )
}

export default Button