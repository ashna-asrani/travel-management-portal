import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SidebarSubMenu from '../components/SidebarSubMenu'
import Login from './Login'
import { NavbarItems } from './NavbarItems';
import NavbarSubMenu from './NavbarSubMenu'
import Button from './Button'
import Dropdown from './Dropdown'
import logo from '../images/logo1.png'


const Nav = styled.div`
    background: #0D2246;
    height: 80px;
    display:flex;
    justify-content:center;
    align-items:center
`;

const NavIcon = styled(Link)`
font-size: 2rem;
height: 100px;
position: fixed;
left:20px;
top:0px;

`;
const NavImage = styled.img`
    height: 80px;
    width: 80px;
    /* position: relative;
    left:100px;   */
  
`

const SidebarNav = styled.nav`
    background: #192D50;;
    width: 250px;
    height: 100vh;
    display:flex;
    justify-content: center;
    position: fixed;
    top: 0;


`;
const SidebarWrap = styled.div`
    width: 100%;
`;
const NavbarWrap = styled.div`
    height: 100%;
`;

function Navbar() {
    return (
        <div>
            <div>

                <Nav>

                    <NavIcon to='/userHome'>
                        <NavImage src={logo} />

                    </NavIcon>
                    {NavbarItems.map((item, index) => {
                        return <NavbarSubMenu item={item} key={index} />
                    })}
                   
                    <Button />

                </Nav>

            </div>
        </div>
    )
}

export default Navbar