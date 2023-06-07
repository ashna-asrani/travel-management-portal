import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import * as RiIcons from 'react-icons/ri'

const NavbarLabel = styled.span`
    /* margin-left:56px; */
    /* padding: 10px; */
    /* margin: 0; */
    color:white;
`;
const NavbarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content:center;
    align-items: center;
    /* margin-left: 265px; */
    /* padding: ; */
    /* position: fixed;
    right:10px; */
    
    /* padding:7px; */
    /* padding-right:20px;
    padding-left:20px; */
    list-style: none;
    height: 40px;
    width:100px;
    text-decoration: none;
    font-size: 18px;
  
    &:hover{
        background:#2D4369;
        border-bottom: 4px solid white;
        cursor: pointer;
    }
`;

// const NavbarLink = styled(Link)`
//     display: flex;
//     color: #e1e9fc;
//     justify-content:space-between;
//     align-items: center;

//     padding:20px;
//     list-style: none;
//     height: 60px;
//     text-decoration: none;
//     font-size: 18px;

//     &:hover{
//         background:#2D4369;
//         border-left: 4px solid white;
//         cursor: pointer;
//     }
// `;

// const NavbarLabel = styled.span`
//     margin-left: 16px;
// `;
const DropdownContainer = styled.ul`
/* float: left;
  overflow: hidden;
  height: 100%; */
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: center;
  background: black;
  z-index:10 ;
`
const DropdownLi = styled.li`
text-decoration:none;
    height: 20px;
    padding:20px;
    display: flex;
    align-items:center;
    color: #f5f5f5;
    font-size:18px;
    width: 100%;
    &:hover {
        background: #314569;
    }
`
const DropdownLink = styled(Link)`
   
    text-decoration:none;
    /* height: 20px; */
    /* padding-left:3em; */
    /* display: flex;
    align-items:center;
    color: #f5f5f5;
    font-size:18px; */
 
`;

export default function NavbarSubMenu({ item }) {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)
    return (
        <div>
            <NavbarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {/* {item.icon} */}
                    <NavbarLabel>{item.title} </NavbarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>

            </NavbarLink>


            <DropdownContainer>
            {subnav && item.subNav.map((item, index) => {
                return (
                  
                        <DropdownLi>
                            <DropdownLink to={item.path} key={index}>
                                <NavbarLabel>{item.title}</NavbarLabel>
                            </DropdownLink>
                        </DropdownLi>
                )
            }
            )}
                    </DropdownContainer>


        </div>
    )
}
