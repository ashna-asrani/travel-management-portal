import React, { useState } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content:space-between;
    align-items: center;
    
    padding:20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
  
    &:hover{
        background:#2D4369;
        border-left: 4px solid white;
        cursor: pointer;
        color: white;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
   
    text-decoration:none;
    height: 60px;
    padding-left:3em;
    display: flex;
    align-items:center;
    color: #f5f5f5;
    font-size:18px;

    &:hover {
        background: #314569;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)
    return (
        <div>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title} </SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>

            </SidebarLink>
            {subnav && item.subNav.map((item,index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            }
            )}

        </div>
    )
}

export default SubMenu