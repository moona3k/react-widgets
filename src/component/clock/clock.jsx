import React from 'react';
import css from './clock.css';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { time: new Date() }
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.intervalId = setInterval(this.tick, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    tick(){
        this.setState({ time: new Date() });
    };

    render() {
        let hour = this.state.time.getHours();
        let minute = this.state.time.getMinutes();
        let second = this.state.time.getSeconds();

        hour = (hour < 10) ? `0${hour}` : hour
        minute = (minute < 10) ? `0${minute}` : minute
        second = (second < 10) ? `0${second}` : second

        return (
            <div className="clock-container">
                <h2 className="clock-date">{this.state.time.toDateString()}</h2>
                <h2 className="clock-time">{hour}:{minute}:{second} PST</h2>
            </div>
        )
    }
};

export default Clock;