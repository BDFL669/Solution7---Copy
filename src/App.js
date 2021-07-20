//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import ResultComponent from './Components/ResultComponent';
import KeypadComponent from './Components/KeypadComponent';

class App extends Component {
	constructor(){
		super();
		this.state = { 
			result: ""
		}
	}

	onClick = button => {
		if(button === "=") {
			this.calculate()
		}
		else if(button === "C"){
			this.reset()
		}
		else if(button === "CE"){
			this.backspace()
		}
		else {
			this.setState({
				result: this.state.result + button
			})
		}
	};

	calculate = () => {
		try {
			this.setState({
				result: (eval(this.state.result) || "") + ""
			})
		} catch (e) {
			this.setState({
				result: "error"
			})
		}
	};

	reset = () => {
		this.setState({
			result: ""
		})
	};

	backspace = () => {
		this.setState({
			result: this.state.result.slice(0, -1)
		})
	};
	render() {
		var button = {
		display: 'flex',
		alignItems: 'space-between',
		justifyContent: 'space-betwee'

		}
		return (
			<div>
			<div className="calculator-body">
			<h2>Simple React Calculator</h2>
			<ResultComponent result={this.state.result}/>
			<KeypadComponent style={button} onClick={this.onClick}/>
			</div>
			</div>
		);
	}
}



export default App;
