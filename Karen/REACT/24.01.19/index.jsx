class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tex: 'hima kgrvi'};
        this.fn = this.fn.bind(this);
    }
    fn(e) {
        let text1 = e.target.value;
        this.setState({tex: text1});
    }
    render() {
        return (
            <div>
                <input onChange={this.fn} placeholder='grel text'></input>
                <p>{this.state.tex}</p>
            </div>);
    }
}
                   
                   
ReactDOM.render(
    <Info />,
    document.getElementById("info")
)