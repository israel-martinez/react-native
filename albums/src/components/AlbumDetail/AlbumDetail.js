import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from '../Card/Card';

class AlbumDetail extends Component {

  render() {
    return (
      <Card>
        <Text>{this.props.album.title}</Text>
      </Card>
    );
  }
}

export default AlbumDetail;
