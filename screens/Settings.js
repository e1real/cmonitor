import React from "react";

import { Button } from 'react-native';

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Yo"
        onPress={() => navigate('Home')}
      />
    );
  }
};

export default Settings;