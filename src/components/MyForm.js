import React, { useState } from "react";

function MyForm() {
        const [data, setname] = useState({})

        function changeData(e) {
            // console.log(e.target.name);

            setname((previous) => {
                return {...previous, [e.target.name]: e.target.value}
            });

        }

        function submit(e) {
            e.preventDefault();
            console.log(data);

        }

        return (
            <div>
                <form onSubmit={submit}>
                    <div>
                        <label className="form-label">Enter Your name:</label>
                        <input type="text" onChange={changeData} name="name" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Enter Your Email:</label>
                        <input type="text" onChange={changeData} name="email" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Enter Your Age:</label>
                        <input type="text" onChange={changeData} name="age" className="form-control" />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
}

export default MyForm