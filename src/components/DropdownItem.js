import React, { useState } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const DropdownItemLink = styled(Link)`
    /* display: block; */
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: black;
    padding: 16px;

`;
const DropdownItemTitle = styled.span`

`;
const DropdownItem=({item})=> {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav)
  return (
    <div> 
       
          <DropdownItemTitle>{item.title}</DropdownItemTitle>

        
           
                {/* <DropdownItemLink to={item.path} key={item.key}>
                    <DropdownItemTitle>{item.title}</DropdownItemTitle>
                </DropdownItemLink> */}
      
      
    </div>
  )
}

export default DropdownItem
