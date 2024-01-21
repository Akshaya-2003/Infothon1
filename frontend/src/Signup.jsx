//Signup.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './css/signup.css'
import backgroundImage from './Images/login.png'; // Adjust the path accordingly

// import ChatbotDialog from "./chatbotDialog";

function Signup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, username);

    axios.post('http://localhost:3000/register', { username, email, password })
        .then((response) => {
            console.log(response);
            navigate('/login');
        })
        .catch((error) => {
            console.log(error);
            if (error.response && error.response.status === 400) {
                // User already exists
                alert('User already registered. Please log in.');
            } else {
                // Other errors
                alert('Registration failed. Please try again.');
            }
        });
};

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100"style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="bg-white p-3 rounded w-25">
                <h2 className="heybo">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">
                            <strong>Username</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            autoComplete="off"
                            name="username"
                            className="form-control rounded-0"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p style={{ marginTop: '20px', color:'white' }}>Do you have an account already?</p>
                <Link to="/login" className="btn btn-default w-100 bg-light rounded-0 borderColor-black" style={{ border: '1px solid black' }}>
                    Login
                </Link>
            </div>
            {/* {<ChatbotDialog /> } */}
        </div>
    );
}

export default Signup;