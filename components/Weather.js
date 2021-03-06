import React from 'react'


const API_KEY = '8102f6c7ef789019c99f4e42b3b5fdd0';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    };

    async componentDidMount() {
       const URL = (`https://api.openweathermap.org/data/2.5/weather?q=taipei,tw&APPID=${API_KEY}`)
       let response = await axios.get(URL);
       let data  = response.data;
       this.setState({ data });
   }

    render(){
        var data = this.state.data
            return(
                <View>
                    {/* <Text>{data && data.weather.length > 0 && data.weather[0].description}</Text> */}
                </View>
            );
    }
}
export default Weather;