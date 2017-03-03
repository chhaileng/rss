import React from 'react';
import {Text, View, Image} from 'react-native';

const Header = (props) => {
  const {textStyle, viewChildStyle, viewStyle, thumbnailStyle} = styles;

  return (
    <View style={viewStyle}>
      <View style={viewChildStyle}>
        <Image
          style = {thumbnailStyle}
          source={require('./feed.png')}
        />
      </View>
      <View style={viewChildStyle}>
        <Text style={textStyle}>
          RSS Feed
        </Text>
      </View>
    </View>
  );
};

const styles = {
  viewStyle:{
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    //justifyContent: 'center',
    //alignItems: 'center',
    height: 60,
    marginTop: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    position: 'relative'
  },
  viewChildStyle:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fda506'
  },
  thumbnailStyle: {
    resizeMode: 'contain',
    width: 250,
    height: 50
    //alignItems: 'center'
  }
}


export default Header;
