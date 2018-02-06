// Import library to help create a component
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/Header/Header';
import Content from './src/components/Content/Content';


// Create a component (in this case import a component)

// Render it to device
export default class App extends Component<{}> {
  render() {
    return (
        <ScrollView style={styles.mainContainer}>
          <Header title='My Albums!' />
          <Content />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
  }
});
