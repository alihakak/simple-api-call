import React, { Component } from 'react';
import { getDataFromApi } from "../api/ApiUtils";

class ShowData extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            apiData: {}
        }
    }

    async handleClick() {
        const apiData = await getDataFromApi();
        this.setState({ apiData: apiData });
    }
    render() {

        return (
            <p>
                <button onClick={this.handleClick}>Click Me to see Data!</button>
                <span> Last Modified: {this.state.apiData.LastModifiedDateTime}</span>
            </p>

        )
    }
}

export default ShowData;
