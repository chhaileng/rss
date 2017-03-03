import React from 'react';
import {Text, View} from 'react-native';

const NewsDetail = (props) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.newsTitle}</Text>
      <Text>{props.newsDecs}</Text>
      <Text style={styles.urlStyle}>{props.newsUrl}</Text>
    </View>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    textStyle: 'bold',
    color: '#ff00ff',
    Width: 3
  },
  urlStyle: {
    fontSize: 12,
    color: '#f00'
  }
}


export default NewsDetail;
