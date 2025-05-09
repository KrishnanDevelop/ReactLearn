import React from 'react';

class ClassState extends React.Component{
    constructor(props) {
        super();
        this.state = props.name
    }

    render() {
        // console.log(this.props.name);

        return <>
            <h1>My name is {this.state.name} and My wife {this.state.wife} and borned in {this.state.place} and age is {this.state.age} and my Experience is {this.state.experience} </h1>
            <button onClick={
                () => {
                    this.setState({name: 'krishnan', wife: 'Nithya', place: 'salem'})
                }
            }>Change</button>
        </>
    }
}

export default ClassState