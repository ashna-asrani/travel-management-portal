import React from 'react'
import FlightDetails from './FlightDetails'
import Navbar from './Navbar'

function BookFlight(props) {
    // console.log('params id bookflight:',props.match.params.bookingId);

  return (
    <div>
      <Navbar/>
        <div>
          <FlightDetails/>
        </div>
        <div>
            
        </div>

    </div>
  )
}

export default BookFlight