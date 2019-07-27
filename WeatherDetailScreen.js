import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import { Constants } from 'expo';

export default class WeatherDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header:null,
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    // const city = navigation.getParam('city', null);
    const city = 'Daejeon';
   
    fetch(`http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/${city}`)
      .then(response => response.json())
      .then(info => {
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
             <Text>데이터를 불러오는 중입니다.</Text>
        </View>
      )
    }
    let humidity=this.state.main.humidity;
    let temp_min=this.state.main.temp_min- 273.15;
    let temp_max=this.state.main.temp_max- 273.15;
    let celsius = this.state.main.temp - 273.15;
    let weather = this.state.weather[0].main;

    if(weather=='Haze'){
      return (
        <View style={styles.container}>
          <ImageBackground source={require('./assets/weather_background/haze.jpg')} style={styles.backgroundImage}>
          <Text style={styles.weather_text}>{weather}<Image source={require('./assets/weather_icon/haze.png')} style={styles.wheaterIconImage}></Image>
          </Text>
            <Text style={styles.temp_text}>{celsius.toFixed(1)}°</Text>
          </ImageBackground>
        </View>
      );
    }else if(weather=='Snow'){
      return (
        <View style={styles.container}>         
       <ImageBackground source={require('./assets/weather_background/Snow_Up.gif')} style={styles.backgroundImage}>
          <Text style={styles.weather_text}>{weather}<Image source={require('./assets/weather_icon/snow.png')} style={styles.wheaterIconImage}></Image>
        </Text>
        <Text style={styles.temp_text}>{celsius.toFixed(1)}°</Text>
        </ImageBackground>
          
       
        </View>
      );
    }
   
  }
}

const styles = StyleSheet.create({
  temp_text:{
    fontSize:80,
    color:'white',
    textAlign: 'left',
    marginStart:10,
  },
  weather_text:{
    fontSize:20,
    color:'white',
    textAlign: 'left',
    
    marginStart:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-end',
    width: null,
    height: null,
    resizeMode: 'cover'
  }, 
  wheaterIconImage:{
    width:40,
    height:40,
    marginStart:10,
  },
 
});
