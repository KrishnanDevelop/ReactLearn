import axios from "axios";
import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditData() {
    const {userId} = useParams();

    const [editData, setEditData] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        axios.put('http://127.0.0.1:8000/api/editUser/' + userId)
        .then(function (response) {
            console.log("User updated successfully: ", response.data);
            setEditData(response.data.data);
        }).catch(function (error) {
            console.error("There was an error updating the user!", error);
        });

    }, []);

    return (
        <div>
            <h1>Edit Data Component</h1>
            <div>
                <form onSubmit={submitLoginForm} >
                    <div >
                        <label htmlFor="name" className="form-label">Name</label>
                        <input value={editData.name} onChange={updateUserData} type="text" id="name" className="form-control" placeholder="Enter Your Name" name="name"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input value={editData.email} onChange={updateUserData} type="text" id="email" className="form-control" placeholder="Enter Your email" name="email"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input value={editData.password} onChange={updateUserData} type="text" id="password" className="form-control" placeholder="Enter Your password" name="password"/>
                    </div>
                    <div>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default EditData;