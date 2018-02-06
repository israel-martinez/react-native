// import libraries for making the component
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

// create a component
class Content extends Component {
  render() {
    return (
        <Text style={styles.text_content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel erat turpis.
          Pellentesque convallis risus et nisi rutrum volutpat. Morbi placerat aliquet elementum.
          Quisque vel ante aliquet lorem sollicitudin malesuada sed non risus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Vestibulum mi urna, condimentum nec metus quis,
          consectetur bibendum orci. Integer efficitur bibendum ante non convallis. Nunc consectetur
          sapien in nisl blandit, feugiat tincidunt tortor interdum. Morbi congue est ac dui auctor,
          vitae consectetur ipsum consectetur. Sed maximus sit amet erat ut tempus. Mauris vitae
          libero at lectus laoreet tempor a a lorem. Curabitur sit amet nunc vitae neque faucibus
          varius. Duis at orci vestibulum, sodales mauris nec, venenatis nibh.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel erat turpis.
          Pellentesque convallis risus et nisi rutrum volutpat. Morbi placerat aliquet elementum.
          Quisque vel ante aliquet lorem sollicitudin malesuada sed non risus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.

          Integer efficitur bibendum ante non convallis. Nunc consectetur sapien
          in nisl blandit, feugiat tincidunt tortor interdum. Morbi congue est ac dui auctor,
          vitae consectetur ipsum consectetur. Sed maximus sit amet erat ut tempus. Mauris vitae
          libero at lectus laoreet tempor a a lorem. Curabitur sit amet nunc vitae neque faucibus
          varius. Duis at orci vestibulum, sodales mauris nec, venenatis nibh.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel erat turpis.
          Pellentesque convallis risus et nisi rutrum volutpat. Morbi placerat aliquet elementum.
          Quisque vel ante aliquet lorem sollicitudin malesuada sed non risus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Vestibulum mi urna, condimentum nec metus quis,
          consectetur bibendum orci. Integer efficitur bibendum ante non convallis. Nunc consectetur
          sapien in nisl blandit, feugiat tincidunt tortor interdum. Morbi congue est ac dui auctor,
          vitae consectetur ipsum consectetur. Sed maximus sit amet erat ut tempus. Mauris vitae
          libero at lectus laoreet tempor a a lorem. Curabitur sit amet nunc vitae neque faucibus
          varius. Duis at orci vestibulum, sodales mauris nec, venenatis nibh.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel erat turpis.
          Pellentesque convallis risus et nisi rutrum volutpat. Morbi placerat aliquet elementum.
          Quisque vel ante aliquet lorem sollicitudin malesuada sed non risus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus.

          Integer efficitur bibendum ante non convallis. Nunc consectetur sapien
          in nisl blandit, feugiat tincidunt tortor interdum. Morbi congue est ac dui auctor,
          vitae consectetur ipsum consectetur. Sed maximus sit amet erat ut tempus. Mauris vitae
          libero at lectus laoreet tempor a a lorem. Curabitur sit amet nunc vitae neque faucibus
          varius. Duis at orci vestibulum, sodales mauris nec, venenatis nibh.
        </Text>
    );
  }
}

// make the component available  other part of the application
export default Content;

const styles = StyleSheet.create({
  text_content: {
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#ffffff',
    marginVertical: 5,
    padding: 5,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
});
