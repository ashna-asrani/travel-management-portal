import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SidebarSubMenu from '../components/SidebarSubMenu'
import Login from './Login'
import NavbarItems from './NavbarItems';
import NavbarSubMenu from './NavbarSubMenu'
import Button from './Button'
import Navbar from './Navbar'
import UserCarousel from './Carousel'


const Nav = styled.div`
    background: #0D2246;
    height: 80px;
    display:flex;
    justify-content:center;
    align-items:center
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

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

function UserHome() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <UserCarousel />
            </div>
        </div>
    )
}

export default UserHome