import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
    render() {
        console.log("llllllllllllllllllllllllllll")
        console.log(this.props.date)
        return (
            <div>
                <span>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.date}</p>

                </span>
            </div >
        );
    }
}

export default User
