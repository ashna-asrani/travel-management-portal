import axios from "axios";
import { useState } from "react";
import '../css/Registration.css'
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


function Registration() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [src, setSrc] = useState("");
    const [dest, setDest] = useState("");
    const [duration, setDuration] = useState("");
    const [rate, setRate] = useState("");
    const [date, setDate] = useState(new Date());

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8200/register",
                {

                    name: name,
                    src: src,
                    dest: dest,
                    duration: duration,
                    rate: rate,
                    date: date

                });
            alert("Flight Details added uccessfully!");

            navigate("/viewFlights");


        }
        catch (err) {
            alert("Flight Details not added!");
        }
    }
    return (
        <div>

            <div style={{'padding':'20px'}}>

            </div>
            <div className="register-container">

                <form className="register-form" onSubmit={handleSubmit}>
                    <br></br>
                    <h1 style={{ 'textAlign': 'center' }}>Add Train Details</h1>
                    {/* <p>Fill in the Information Below</p> */}


                    <input type="text"
                        name="name"
                        placeholder="Train Name"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />

                    <input type="text"
                        name="src"
                        placeholder="Source"
                        onChange={(event) => {
                            setSrc(event.target.value);
                        }}
                    />
                    <input type="text"
                        name="dest"
                        placeholder="Destination"
                        onChange={(event) => {
                            setDest(event.target.value);
                        }}
                    />
                    <input type="text"
                        name="duration"
                        placeholder="Duration"
                        onChange={(event) => {
                            setDuration(event.target.value);
                        }}
                    />

                    <input type="text"
                        name="rate"
                        placeholder="Rate"
                        onChange={(event) => {
                            const re = /^[0-9\b]+$/;
                            if (event.target.value === '' || re.test(event.target.value))
                                setRate(event.target.value);
                        }}
                    />
                    <DatePicker className="datepicker" selected={date} onChange={
                        (date) => setDate(date)}/>



                    <button type="submit">Submit</button>


                </form>


            </div>

        </div>
    )
}

export default Registration;