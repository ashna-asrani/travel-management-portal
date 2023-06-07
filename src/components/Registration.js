import axios from "axios";
import { useState } from "react";
import '../css/Registration.css'
import { useNavigate } from "react-router-dom";
function Registration() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8200/register",
                {

                    name: name,
                    email: email,
                    password: password,
                    contact: contact,

                });
            alert("User Registation Successfully");
            setName("");
            setEmail("");
            setPassword("");
            navigate("/login");


        }
        catch (err) {
            alert("User Registation Failed");
        }
    }
    return (
        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>
                <br></br>
                <h1 style={{'textAlign':'center'}}>Register</h1>
                {/* <p>Fill in the Information Below</p> */}


                <input type="text"
                    name="name"
                    placeholder="name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />

                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <input type="text"
                    name="contact"
                    placeholder="contact"
                    onChange={(event) => {
                        setContact(event.target.value);
                    }}
                />

                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />



                <button type="submit">Register</button>


            </form>


        </div>
    )
}

export default Registration;