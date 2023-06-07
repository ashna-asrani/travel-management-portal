
import React, { useState } from 'react'
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
import logo from '../images/logo1.png'

const Nav = styled.div`
    background: #0D2246;
    height: 80px;
    display:flex;
    justify-content:center;
    align-items:center
`;

const NavIcon = styled(Link)`
/* margin-left: 2rem; */
font-size: 2rem;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
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

export default function Sidebar() {
    // const [sidebar,setSidebar] = useState(false)
    // const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>


            <div>

                <Nav>

                  

                    <Button />

                </Nav>
                <SidebarNav>
                    <SidebarWrap>
                        <NavIcon to="/adminHome">
                            {/* <AiIcons.AiOutlineClose /> */}
                            <NavImage src={logo} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SidebarSubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>

            </div>

        </div>
    )
}

/* export default Sidebar */