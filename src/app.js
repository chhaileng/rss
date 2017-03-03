import React, { Component } from 'react';
import { View , Text} from 'react-native';
import Header from './components/common/Header';
import RssList from './components/common/RssList';
import Web from './components/common/Web';

class App extends Component {

  render() {
    return (
      <View>
        <Header headerText="RSS" />
        <RssList/>
      </View>
    );
  }
}

export default App;
