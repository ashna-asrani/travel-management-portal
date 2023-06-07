import { React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Tab } from "bootstrap";
import axios from "axios";



 function FlightList(props) {
  const navigate = useNavigate();

  console.log('flights in useeffectc flist:', props.flights);

  async function handleBookTicket(id) {
    const token = localStorage.getItem('authToken');
    console.log('token in handleBookTicket:'+token);
    const email = localStorage.getItem('loginEmail');
    const formData = new FormData();
    formData.append("flightId", id);
    formData.append("email", email);
    try {
      await axios({
        method: "post",
        url: "http://localhost:8200/addBooking",
        data: formData,
        headers: { "Content-Type": "multipart/form-data",
        "Authorization":`Bearer ${token}`
       },
      }).then(res => {
        if (res.status === 200) {
          console.log('hi status 200');
          console.log('data::'+res.data.id);
          const bookingId = res.data.id;
          // res.json.then((data) => {
          //   console.log('data:'+data);
            // const bookingId = data.id;
            navigate(`/bookFlight/${bookingId}`);

          // })
        }
      }

      )

    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      {/* {flights} */}

      {/* {flights.map(flight=>{
            return <div key={flight.id}>{flight.name}</div>
        })} */}
      <h2 className="text-center">Flights List</h2>
      {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br> */}
      <div className="row">
        <Table table striped bordered hover style={{ 'padding': '10px' }}>

          <thead>
            <tr>

              <td>Flight name</td>
              <td>Source</td>
              <td>Destination</td>
              <td> Duration</td>
              <td> Rate</td>
              <td>Date</td>
              <td>Book</td>
            </tr>
          </thead>
          <tbody>
            {
              props.flights.map(
                flight =>
                  <tr key={flight.id}>
                    <td> {flight.name}</td>
                    <td> {flight.src}</td>
                    <td> {flight.dest}</td>
                    <td> {flight.duration}</td>
                    <td> {flight.rate}</td>
                    <td> {flight.date}</td>

                    <td>
                      <button className="btn btn-success" onClick={() => handleBookTicket(flight.id)}> Book</button>


                      {/* <button className="btn btn-success" onClick={() => this.editUser(user.email)}> Edit</button> */}
                    </td>
                  </tr>

              )
            }
          </tbody>
        </Table>

      </div>
    </div>
  )
}

export default FlightList