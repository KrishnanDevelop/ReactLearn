import React from 'react';

class User extends React.Component {
    render() {
        const users = this.props.users;
        // console.log(users);
        return (
            <table className="table table-bordered table-hover" style={{backgroundColor:"green"}}>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>place</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map( (user) => 
                        <tr key={user.id}>
                            <td>{ user.id}</td>
                            <td>{ user.name}</td>
                            <td>{ user.place}</td>
                        </tr>
                    ) }
                </tbody>
            </table>
        )
    }
}

export default User;