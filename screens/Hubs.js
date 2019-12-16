import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Modal, View, TouchableHighlight, Alert, ImageBackground, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card, Input, Button } from '../components';
import hubs from '../constants/hubs';
import { argonTheme } from '../constants';

const { width } = Dimensions.get('screen');

class Hub extends React.Component {
  state = {
    modalVisible: false,
  };
  
  _handleButtonPress = () => {
    this.setModalVisible(true);
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
  renderModal() {
    var modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    };
    var innerContainerTransparentStyle = {backgroundColor: '#fff', padding: 20};
    
    return (
    
      <View style={{margin: 20}}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={innerContainerTransparentStyle}>
            <Block>
                <Text size={24}>Add Hub</Text>
              </Block>
              <Block>
                <Input borderless placeholder="Hub Name"/>
              </Block>
              <Block>
              <Input borderless placeholder="Mac Address"/>
                </Block>
                <Block>
                  <Button title='close' onPress={this.setModalVisible.bind(this, false)}> 
                    <Text color={argonTheme.COLORS.WHITE}> Save Hub </Text>
                    </Button>
                </Block>
            </View>
          </View>
        </Modal>

        <TouchableHighlight>
            <Button onPress={() => {
            this.setModalVisible(true);
          }}>Add new hub</Button>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <Block flex center style={styles.hub}>
        {this.renderHubs()}
        {this.renderModal()}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

export default Hub;
