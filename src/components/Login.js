import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Registration.css"
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //  function refreshPage() {
    //     setTimeout(()=>{
    //         window.location.reload(false);
    //     }, 500);
    //     console.log('page to reload')
    //     window.location.reload();
    // }


    async function handleSubmit(event) {
        event.preventDefault();
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        // console.log('email:',email);

        try {
            // var checkAdmin = true;
            console.log('username::' + username);
            console.log('password::' + password);

            fetch('http://localhost:8200/authenticate', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        "username": username,
                        "password": password,
                    }
                )
            }).then(res => {
                if (res.status == 200) {
                    res.json().then(data => {
                        // var authToken = data.token;
                        // console.log(authToken)
                        console.log(data);
                        localStorage.setItem("authToken", data.jwtToken);
                        localStorage.setItem("loginEmail",username);
                        console.log('loginEmail:'+localStorage.getItem('loginEmail'));
                        if (data.role === '[ADMIN]') {
                            navigate('/adminHome');
                        }
                        else {
                            navigate('/userHome');
                        }
                    })
                }
                else {
                    alert({
                        title: "Something went wrong!",
                        text: "Your Username or password is wrong!!",
                        icon: "warning",
                        dangerMode: true,
                    })
                }
            })

        }
        catch (err) {
            console.log(err)
            alert("User Login Failed");
        }
    }
    return (
        <div>
            <div className="register-container">

                <form className="register-form" onSubmit={handleSubmit}>
                    <br></br>
                    <h1 style={{ 'text-align': 'center' }}>Login</h1>
                    {/* <p>Fill in the Information Below</p> */}


                    <input type="email"
                        name="username"
                        placeholder="Enter Email"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />


                    <input type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />

                    <div className="parent">

                        <div className="child1"><Link to='/forgotPassword' className="link" >Forgot Password?</Link></div>
                        <div className="child2"><Link to='/register' className="link" >Create an Account?</Link></div>
                    </div>

                    <button type="submit">submit</button>


                </form>

            </div>
        </div>
    )
}

export default Login;