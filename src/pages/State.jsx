import React, { useState } from "react";
import GoBackHome from "../components/GoBackHome";

class State extends React.Component{
    constructor(props){
        super(props);
        console.log("컴포넌트 생성");
    }
    state = {
        count : 0
    };
    add = () => {
        this.setState(current =>({count: current.count + 1}));

    };
    minus = () => {
        this.setState(current =>({count: current.count - 1}));
    };
    componentDidMount(){
        console.log("컴포넌트 렌더링 완료");
    };
    componentDidUpdate(){
        console.log("컴포넌트 업데이트");
    };
    componentWillUnmount(){
        console.log("컴포넌트 잘가~");
    }

    render(){
        console.log("렌더링 중");
        return (
            <div>
                <GoBackHome page={"/"} />
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default State;