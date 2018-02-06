// import libraries for making the component
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// create a component
class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_title}>{this.props.title}</Text>
        <Text style={styles.text_subtitle}>An applications for your favorites albums!</Text>
      </View>
    );
  }
}

// make the component available  other part of the application
export default Header;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  text_title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  text_subtitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  text_content: {
    fontSize: 14,
    textAlign: 'center',
  },
});
