import React from 'react'
import axios from "axios";
import { useState } from "react";
import '../css/Registration.css'
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();
        const forgotPasswordEmail = localStorage.getItem("forgotPasswordEmail");
        const formData = new FormData();
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        formData.append("forgotPasswordEmail",forgotPasswordEmail);
       // console.log('email::'+formData.forgotPasswordEmail);
        try {
            await axios({
                method: 'put',
                url: 'http://localhost:8200/changePassword',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
        }).then(res=> {
            if(res.status===200)
            {
                alert('Password reset successfully!')
                navigate('/login');
            }
            else
            {
                alert('Password reset failed!')
            }
        })


    }
        catch (err) {
        alert("Error!");
    }
}
return (
    <div className="register-container">

        <form className="register-form" onSubmit={handleSubmit}>
            <br></br>
            <h1 style={{ 'textAlign': 'center' }}>Change Password</h1>
            {/* <p>Fill in the Information Below</p> */}

            <input type="password"
                name="NewPassword"
                placeholder="New Password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <input type="password"
                name="ConfirmPassword"
                placeholder="Confirm Password"
                onChange={(event) => {
                    setConfirmPassword(event.target.value);
                }} />

            <button type="submit">Submit</button>


        </form>
    </div>
)


}

