import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,



    },
    {
        title: 'Users',
        path: '/users',
        icon: <FaIcons.FaUserAlt />
    },
    {
        title: 'Flights',
        // path: '/flight',
        icon: <RiIcons.RiFlightTakeoffLine />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add Flight Details',
                path: '/addFlight'
            },
            {
                title: 'View Flight Details',
                path: '/viewFlights'
            },
            {
                title: 'Book Flight',
                path: '/searchFlight'
            }
        ]
    },
    {
        title: 'Trains',
        icon: <FaIcons.FaTrain/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add Train Details',
                path: '/addTrain'
            },
            {
                title: 'View Train Details',
                path: '/viewTrains'
            },
            {
                title: 'Book Train',
                path: '/bookTrain'
            }
        ]
    }


]