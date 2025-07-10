import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const updateUserData = (e) => {        
        setLoginData({
            ...loginData, [e.target.name]: e.target.value
        });
    };
    
    const submitLoginForm = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/logindetails', loginData)
        .then(function (response) {
            console.log("Response: ", response.data);
            navigate('/')
        })
        .catch(function (error) {
            console.error("There was an error fetching the data!", error);  
        }) 
    };

    return (
        <>
            <header>
                <h1>Login Form</h1>
            </header>
            <div>
                <form onSubmit={submitLoginForm} >
                    <div >
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={updateUserData} type="text" id="name" className="form-control" placeholder="Enter Your Name" name="name"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={updateUserData} type="text" id="email" className="form-control" placeholder="Enter Your email" name="email"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={updateUserData} type="text" id="password" className="form-control" placeholder="Enter Your password" name="password"/>
                    </div>
                    <div>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;