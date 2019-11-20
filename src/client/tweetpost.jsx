import React from 'react';
import ReactDOM from 'react-dom';

class Post extends React.Component {
    render() {

        return (
            <div>
                <span>
                    <p>{this.props.content}</p>
                </span>
            </div >
        );
    }
}

export default Post
