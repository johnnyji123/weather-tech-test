import React, { Component } from "react";
import styles from "./App.module.scss";
import Cardlist from "../../Components/Cardlist/Cardlist";


const Api_key = "ff5dd56508e67c163c95b7ed93bbc5dcb"

class App extends Component {
state = {
  name: undefined,
  temperature: undefined,
  humidity: undefined,
  minTemp: undefined,
  maxTemp: undefined,
  bristolTemp: undefined,
  bristolHumidity: undefined,
  bristolMinTemp: undefined,
  bristolMaxTemp: undefined,
  romeTemp: undefined,
  romeHumidity: undefined,
  romeMinTemp: undefined,
  romeMaxTemp: undefined
}
 
    async componentDidMount() {
      const url =`https://api.openweathermap.org/data/2.5/weather?q=london,uk&units=metric&appid=f5dd56508e67c163c95b7ed93bbc5dcb`;
      const bristolUrl =`https://api.openweathermap.org/data/2.5/weather?q=bristol,uk&units=metric&appid=f5dd56508e67c163c95b7ed93bbc5dcb`;
      const romeUrl =`https://api.openweathermap.org/data/2.5/weather?q=rome,italy&units=metric&appid=f5dd56508e67c163c95b7ed93bbc5dcb`;
      const response = await fetch(url);
      const data = await response.json();
      const brsitolResponse = await fetch(bristolUrl)
      const bristolData = await brsitolResponse.json();
      // console.log(bristolData);
      const romeResponse = await fetch(romeUrl)
      const romeData = await romeResponse.json()
      console.log(romeData);

      this.setState({
        name: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        bristolTemp: bristolData.main.temp,
        bristol: bristolData.name,
        bristolHumidity: bristolData.main.humidity,
        bristolMinTemp: bristolData.main.temp_min,
        bristolMaxTemp: bristolData.main.temp_max,
        rome: romeData.name,
        romeTemp: romeData.main.temp,
        romeHumidity: romeData.main.humidity,
        romeMinTemp: romeData.main.temp_min,
        romeMaxTemp: romeData.main.temp_max
      
        
      })
    }
   
  
  render(){
    return(
      <div className = {styles.wrapper}>
        <section className = {styles.london}>
          <div>{this.state.name}</div>
        <div>Temperature {this.state.temperature}</div>
        <div>Humidity {this.state.humidity}</div>
        <div>Minimum temperature {this.state.minTemp}</div>
        <div>Maximum temperature {this.state.maxTemp}</div>
        </section>
        <section className = {styles.bristol}>
        <div>{this.state.bristol}</div>
        <div>Bristol temp{this.state.bristolTemp}</div>
        <div>Bristol Humidity {this.state.bristolHumidity}</div>
        <div>Bristol minimum temperature {this.state.bristolMinTemp}</div>
        <div>Bristol maximum temperature {this.state.bristolMaxTemp}</div>
        </section>
        <section className = {styles.rome}>
          <div>{this.state.rome}</div>
        <div>Rome temp {this.state.temperature}</div>
        <div>Rome Humidity {this.state.romeHumidity}</div>
        <div>Rome minimum temperature {this.state.romeMinTemp}</div>
        <div>Rome maximum temperature {this.state.romeMaxTemp}</div>
        </section>
      </div>
    )
  }
}

// refactor - instead of fetching all urls, can use a promise.
// //urls = [url1, url2, url3]
//         Promise.all(urls.map(url => fetch(url).then(res => res.json())))
//         promiseArray = [fetch1, fetch2, fetch3]
//         Promise.all(promiseArray)
//         .then(data => this.setState({ data }))


export default App;