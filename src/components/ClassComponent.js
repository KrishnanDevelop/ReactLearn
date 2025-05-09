import React from 'react';

class ClassComponent extends React.Component {
    render() {
        // console.log(this.props.stats);
        const {name, wife} = this.props.stats
        const text = `I am ${name}, this is my ${wife}`;
        return (
            <p>{text}</p>
        )
    }
}

export default ClassComponent;