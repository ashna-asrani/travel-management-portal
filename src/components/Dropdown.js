import React from 'react'
import  NavbarItems  from './NavbarItems'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DropdownItem from './DropdownItem'

const DropdownItems = styled.ul`
    width:10rem;
    list-style:none;
    text-align: center;
    padding: 10px;
`;
const DropdownItemli = styled.li`
    width:10rem;
    position:absolute;
    top:20px;
    list-style:none;
    text-align: center;
    background: white;
    cursor: pointer;
`;
function Dropdown() {
    return (
        <div>
            
            <DropdownItems>
            {/* <ul style={{'backgroundColor':'white','width':'10rem',
                        'listStyle':'none',
                        'textAlign': 'center'}}> */}
                {NavbarItems.map((item,index) => {
                     
                    return (
                    <DropdownItemli key={item.id}>
                        <DropdownItem key={index} item={item}/>
                    </DropdownItemli>
                    );
                      
                        // <li key={item.id} style={{'backgroundColor':'white','width':'10rem',
                        // 'listStyle':'none',
                        // 'textAlign': 'center'}}>
                        //     <DropdownItemLink to={item.path}>
                        //         {/* <DropdownItemTitle>{item.title}</DropdownItemTitle> */}
                        //         {item.title}
                        //     </DropdownItemLink>
                        // </li>
                   


                })}
                {/* </ul> */}
            </DropdownItems>
        </div>
    )
}

export default Dropdown;