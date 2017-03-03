import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import NewsDetail from './NewsDetail';

var DOMParser = require('xmldom').DOMParser;
var items = [];

class RssList extends Component {
  state = {
    items: [],
    newsContent: {}
  };

  componentWillMount() {
    axios.get('http://www.ft.com/rss/companies')
    .then(response => {
      var doc = new DOMParser().parseFromString(response.data, 'text/xml')
      var items = doc.getElementsByTagName('item');
      this.setState({ items });
    });
  }

renderListItems(){
  var news = [];
  for(key in this.state.items){
    var childNode = this.state.items[key].textContent;
    if (childNode != null) {
      var data = childNode.split('\n');
      var content = {
        title: data[1],
        url: data[2] ,
        decs: data[3],
        id: data[6]
      };

      // const element = <View key={key}>
      //                   <Text style={styles.titleStyle}>Title: { content.title }</Text>
      //                   <Text>Description: { content.decs }</Text>
      //                   <Text style={styles.urlStyle}>URL: { content.url }</Text>
      //                 </View>

      news.push(content);
    }
    // console.log(content);
    // this.setState({newsContent: news});
  }
  console.log(news);

  return news.map(content =>
    <NewsDetail
      newsTitle={content.title}
      newsDecs={content.decs}
      newsUrl={content.url}
      key={content.id}
    />
  );

  // return (
  //   <NewsDetail />
  // );


}


  render() {
    // debugger
    // console.log(this.state.rsses);
    return (
      <ScrollView>
        { this.renderListItems() }
      </ScrollView>
    );
  }
}


export default RssList;
