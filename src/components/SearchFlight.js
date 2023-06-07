import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "../../src/css/Registration.css"
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import FlightList from "./FlightList";
import AddFlightDetails from "./AddFlightDetails"
import { Redirect } from 'react-router-dom'
import '../css/Registration.css'
import Navbar from "./Navbar";


function SearchFlight(props) {
    const navigate = useNavigate();
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        console.log('flights in useeffect:', flights);
    })
    async function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem("authToken");
        console.log(token);

        try {

            // await axios.get()
            const fl = await fetch(`http://localhost:8200/getFlightBySrcAndDest/${source}/${destination}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`

                },
            }).then(f1 => {
                if (f1.status === 200) {
                    f1.json().then((data) => {
                        // var authToken = data.token;
                        // console.log(authToken)
                        console.log(data);
                        setFlights(data);
                        // navigate('/flightList',{state:{name:'ashna'}});
                        // props.history.push({ 
                        //     pathname: '/flightList',
                        //     state: flights
                        //    });
                        // navigate("/flightList");

                    })
                    // console.log(res.body.json);
                }
            })




            //     }).then(res => {
            //         if (res.status == 200) {
            //             res.json().then((data) => {
            //                 // var authToken = data.token;
            //                 // console.log(authToken)
            //                 console.log(data);
            //                 setFlights(data);

            //             // navigate("/flightList");

            //             })
            //             // console.log(res.body.json);
            //         }
            //         else {
            //             alert({
            //                 title: "Something went wrong!",
            //                 text: "Your Username or password is wrong!!",
            //                 icon: "warning",
            //                 dangerMode: true,
            //             })
            //         }

            //     })
            console.log('flights::' + flights);

            // }
        }
        catch (err) {
            console.log(err)
            alert("User Login Failed");
        }
    }
    return (
        <div>

            <Navbar />
            <div className="register-container">

                <form className="register-form" onSubmit={handleSubmit}>
                    <br></br>
                    {/* <h1 style={{ 'text-align': 'center'}}>Login</h1> */}
                    {/* <p>Fill in the Information Below</p> */}

                    <div className="flight-form">


                        <input type="text"
                            name="source"
                            placeholder="Enter source"
                            onChange={(event) => {
                                setSource(event.target.value);
                            }}
                        />


                        <input type="text"
                            name="destination"
                            placeholder="Enter Destination"
                            onChange={(event) => {
                                setDestination(event.target.value);
                            }}
                        />
                    </div>

                    <button type="submit">submit</button>


                </form>

            </div>
            <div className="flight-details">
                {flights.length>0 ? <FlightList flights={flights} /> : ''}

            </div>
            {/* {
                 

                // flights.map((flight,key)=>{
                //     console.log('flight:',flight)
                //     return <FlightList key={key} flight={flight}/>
                // })
            } */}

        </div>
    )
}

export default SearchFlight;