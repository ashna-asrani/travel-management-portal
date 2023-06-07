import React from 'react'
import axios from "axios";
import { useState } from "react";
import '../css/Registration.css'
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();
        const formData= new FormData();
        formData.append("email",email);
        console.log('email::'+formData.email);
        localStorage.setItem("forgotPasswordEmail",email);
        console.log('forgotPasswordEmail::'+localStorage.getItem('forgotPasswordEmail'));
        

      
        try {
            // await axios.get(`http://localhost:8200/forgetPassword/${email}`)
            await axios({
                method:"post",
                url: "http://localhost:8200/forgetPassword",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })

            .then(res=>{
                if(res.status===200)
                {
                    setEmail("");
                    navigate("/checkOTP");
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
                <h1 style={{'textAlign':'center'}}>Forgot Password</h1>
                {/* <p>Fill in the Information Below</p> */}

                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
               
                <button type="submit">Send OTP</button>


            </form>
            </div>
    )


}

