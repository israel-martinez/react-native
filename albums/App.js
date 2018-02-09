// Import library to help create a component
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a component (in this case import a component)

// Render it to device
export default class App extends Component<{}> {
  render() {
    return (
        <View style={styles.mainContainer}>
          <Header
            title='My Albums!'
            subtitle='Filter: Taylor Swift'
          />
          <ScrollView style={styles.listContainer}>
            <AlbumList />
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f5f5f5'
  },
  listContainer: {
    flex: 0.8,
    flexDirection: 'column',
    padding: 1,
    marginTop: 15,
  }
});
