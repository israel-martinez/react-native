import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../AlbumDetail/AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(
      album => <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <View style={styles.list}>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
    marginVertical: 5,
    padding: 5,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
});
