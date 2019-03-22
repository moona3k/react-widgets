import React, { Component } from 'react';
import Clock from './component/clock/clock';
import Tabs from './component/tabs/tabs';

class App extends Component {
  
  render() {
    const titles = ['1a', '2a', '3a', '4a', '5a'];
    const contents = ["coke", "sprite", "beer", "wine", "pizza"];

    return (
      <div>
        <Clock />
        <Tabs
          titles={titles}
          contents={contents}
        />
      </div>
    );
  }
}

export default App;