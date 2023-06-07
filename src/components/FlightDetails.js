import React from 'react'
// import { userParams } from 'react-router'

function FlightDetails(props) {
    // console.log('params id:',props.match.params.bookingId);
    var path = window.location.href;

    let uriId = path.split("/");

    let id = uriId[1];

    console.log(id);
    return (
        <div>FlightDetails</div>
    )
}

export default FlightDetails