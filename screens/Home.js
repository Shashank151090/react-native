import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme, Icon } from 'galio-framework';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
 
import { Card, Button } from '../components';
import devices from '../constants/devices';
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderDevices = () => {
    const { navigation, optionLeft, optionRight } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.devices}>
        <Block flex>
          <Card item={devices[0]} horizontal  />
          <Card item={devices[1]} horizontal />
          <Card item={devices[2]} horizontal/>
          <Card item={devices[3]} horizontal />
          <Card item={devices[4]} horizontal />
        </Block>
        <Block>
            <FontAwesomeIcon icon={ faPlusCircle } onPress={() => navigation.navigate('Hubs')}/>
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderDevices()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  devices: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  icons: {
    
  }
});

export default Home;
