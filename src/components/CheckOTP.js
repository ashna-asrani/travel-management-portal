import React from 'react'
import axios from "axios";
import { useState } from "react";
import '../css/Registration.css'
import { useNavigate } from "react-router-dom";

export default function CheckOTP() {
    const navigate = useNavigate();

    const [otp, setOTP] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("otp",otp);
        try {
            await axios({
                method: "post",
                url: "http://localhost:8200/verifyOTP",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }

            })
            .then(res=>{
                if(res.status===200)
                {
                    setOTP("");
                    navigate("/changePassword");
                }
               
            });

        }
        catch (err) {
            alert("Error!");
        }
    }
    return (
        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>
                <br></br>
                <h1 style={{'textAlign':'center'}}>Confirm OTP</h1>
                {/* <p>Fill in the Information Below</p> */}

                <input type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    onChange={(event) => {
                        setOTP(event.target.value);
                    }}
                />

                
               
                <button type="submit">Submit</button>


            </form>
            </div>
    )


}

