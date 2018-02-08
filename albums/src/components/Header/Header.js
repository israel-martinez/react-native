// import libraries for making the component
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// create a component
class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_title}>{this.props.title}</Text>
        <Text style={styles.text_subtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

// make the component available  other part of the application
export default Header;


const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    height: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  text_title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
  },
  text_subtitle: {
    fontSize: 16,
    textAlign: 'center',
    margin: 5,
  },
  text_content: {
    fontSize: 14,
    textAlign: 'center',
  },
});
