import React, { Component } from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import Card from '../Card/Card';
import CardSection from '../CardSection/CardSection';
import Button from '../Button/Button';

class AlbumDetail extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: this.props.album.thumbnail_image }}
              alt={this.props.album.thumbnail_image}
            />
          </View>

          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextTitle}>
              {this.props.album.title}
            </Text>
            <Text>{this.props.album.artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: this.props.album.image }}
          />
        </CardSection>

        <CardSection>
          <Button
            onPress={() => Linking.openURL(this.props.album.url)}
            buttonText='Buy album'
          />
        </CardSection>
      </Card>
    );
  }
}

export default AlbumDetail;

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {

  },
  headerTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 0.6,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  buttonStyle: {

  },
});
