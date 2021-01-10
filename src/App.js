import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import pic from './image.png';

class App extends Component {

    state = {
        data      : {},
        country   : "",
        isLoading : true
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data      : fetchedData,
            isLoading : false
        })
    }

    handleCountry = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data    : fetchedData,
            country : country
        })
    }

    render() {
        const { isLoading, data, country } = this.state;

        if(isLoading) {
            return (
                <div>
                    <h1> Loading... </h1>
                </div>
            )
        }
        
        return (
            <div className="container">
                <img
                    src={pic}
                    alt="covid19"
                    className="logo"
                />
                <Cards
                    data={data}
                />
                <CountryPicker
                    handleCountry={this.handleCountry}
                />
                <Chart
                    data={data}
                    country={country}
                />
             </div>
        )    
    }
}

export default App;