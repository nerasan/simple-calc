import React, {Component} from "react";

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        result: 0
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value })
    }

    addNum = () => {
        this.setState({
            result: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
    }

    subtractNum = () => {
        this.setState({
            result: parseInt(this.state.num1) - parseInt(this.state.num2)
        })
    }

    multiplyNum = () => {
        this.setState({
            result: parseInt(this.state.num1) * parseInt(this.state.num2)
        })
    }

    divideNum = () => {
        this.setState({
            result: parseInt(this.state.num1) / parseInt(this.state.num2)
        })
    }

    render(){
        return (
            <div className="container">
                <h1>react calculator!</h1>

                <div className="add">
                    <input type="number"
                    name="num1"
                    placeholder="enter first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1')}
                    />

                    <span>+</span>
                    <input type="number"
                    name="num2"
                    placeholder="enter second number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2')}
                    />

                    <div className="buttons">
                        <button onClick={this.addNum}>add</button>
                        <button onClick={this.subtractNum}>subtract</button>
                        <button onClick={this.multiplyNum}>multiply</button>
                        <button onClick={this.divideNum}>divide</button>
                    </div>
                    <h3>results go here!</h3>
                    <p>{this.state.result}</p>
                </div>
            </div>
        )
    }
}

export default Calculator;