import React, {Component} from 'react';


class StopTime extends Component {
    state = {
        data: null,
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.interval = setInterval(() => {
            this.setState({
                data: new Date().toLocaleString(),
            })
        }, 1000)
    }
    componentWillUnmount() {
        console.log("componentWillUnMount");
        clearInterval(this.interval);
    }

    render() {
        const {data}=this.state;
        return ( <div className="STime">
            <p>{data}</p>
            </div>
        )
    }
}

export {StopTime};