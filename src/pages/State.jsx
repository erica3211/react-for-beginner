import React, { useState } from "react";
import GoBackHome from "../components/GoBackHome";

class State extends React.Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }
    render() {
        const { isLoading } = this.state;
        return (
            <div>
                {isLoading ? "Loading..." : "We are ready"}
            </div>
        );
    }
}

export default State;