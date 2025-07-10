import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const [imageData, setImageData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/userDetails')
        .then(function (response) {
            console.log("Response: ", response.data);
            setImageData(response.data.data)
        })
        .catch(function (error) {
            console.error("There was an error fetching the data!", error);  
        })
    }, [refresh]);

    const notify = () => toast.success('Here is your toast.', {
        duration: 4000,
        position: 'top-right',
        icon: '👏'
    });

    function deleteUser(userId) {
        axios.delete('http://127.0.0.1:8000/api/deleteUser/' + userId)
        .then(function (response) {
            console.log("User deleted successfully: ", response.data);
            notify();
            setRefresh(prev => !prev);
        }).catch(function (error) {
            console.error("There was an error deleting the user!", error);
        });
    }
    return (
        <>
        <div>
            <div>
                <Link to="/userLogin" className="btn btn-primary">Add User</Link>
            </div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <div>
                <table className="table table-striped
                ">
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            imageData.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <button onClick={() => {navigate(`/editData/${item.user_id}`)}} className="btn btn-success me-2" type="button">Edit</button>
                                        <button onClick={() => {deleteUser(item.user_id)}} className="btn btn-danger" type="button">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default Home;