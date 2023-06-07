import React from "react";
import * as RiIcons from 'react-icons/ri'
export  const NavbarItems = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Hotels',
        path:'/user/hotels'
    },
    {
        title:'Travel',
        // path:'/travel',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Flights',
                path: '/searchFlight'
            },
            {
                title: 'Trains',
                path: '/viewTrains'
            },
        ]
            
    },
   
];

// export   const NavbarDropdown =[
//     {
//         id:1,
//         title:'Flight',
//         path:'/flights'
//     },
//     {
//         id:2,
//         title:'Train',
//         path:'/trains'
//     },
//     {
//         id:1,
//         title:'Flight',
//         path:'/flights'
//     },
//     {
//         id:2,
//         title:'Trainaa',
//         path:'/trains'
//     },
    
// ];
export  default  NavbarItems;