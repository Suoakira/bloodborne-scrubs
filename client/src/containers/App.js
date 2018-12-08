import React, { Component } from 'react';
import Navbar from "./Navbar"
import Banner from "../components/Banner"
import Bossarea from "./Bossarea"


class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <Banner />
        <Bossarea />
      
      </div>
        

    )
  }
}

export default App;
