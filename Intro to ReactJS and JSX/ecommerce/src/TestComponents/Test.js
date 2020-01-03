import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            time: 0
        };
    }

    handleClick = () => {
        this.setState(state => ({count: state.count + 1}));
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(state => ({time: state.time + 1}))
        }, 1000)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me: {this.state.count}</button>
                <p>Time since last refresh: {this.state.time}</p>
            </div>
        );
    }
}

export default Test;