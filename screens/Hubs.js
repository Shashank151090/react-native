import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import hubs from '../constants/hubs';
const { width } = Dimensions.get('screen');

class Hub extends React.Component {
  renderHubs = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.hubs}>
        <Block flex>
          <Card item={hubs[0]} horizontal  />
            <Card item={hubs[1]} horizontal />
            <Card item={hubs[2]} horizontal/>
            <Card item={hubs[3]} horizontal />
            <Card item={hubs[4]} horizontal />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.hub}>
        {this.renderHubs()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  hub: {
    width: width,    
  },
  hubs: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Hub;
