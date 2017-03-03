import React from 'react';
import {Text, View, Image, Button, WebView, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const NewsDetail = (props) => {
  const url = props.newsUrl;
  const{
    newsImageStyle,
    newsTitleStyle,
    newsDescStyle,
    buttonStyle,
    wapper
  } = styles;

  return(
    <Card key={key}>
      <CardSection>
        <View>
          <Text style={newsTitleStyle}>
            {props.newsTitle}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <View>
          <Text style={newsDescStyle}>
            {props.newsDecs}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={wapper}>
          <Text style={buttonStyle} onPress={() => Linking.openURL(url)}>Read More...</Text>
        </View>
      </CardSection>

    </Card>
  );
}

const styles={
    newsImageStyle:{
        //flex: 1,
        //alignItems: 'flex-start',
        resizeMode: 'contain',
        width: 100,
        height: 50
    },

    newsTitleStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color : '#000000'
    },

    newsDescStyle:{
        fontSize: 12,
        textDecorationColor : '#A8A8A8'
    },

    buttonStyle:{
      color: 'white',
      flex: 1,
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'right',
      paddingTop: 6
    },

    wapper: {
      flex:1,
      height: 30,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#D1CAC9',
      backgroundColor: '#F8A613',
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      borderRadius: 5
    }
};

export default NewsDetail;
