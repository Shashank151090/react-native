import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Modal, View, TouchableHighlight, Alert, ImageBackground, Text} from 'react-native';
import { Block, theme, Icon } from 'galio-framework';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
 
import { Card, Button, Input } from '../components';
import devices from '../constants/devices';
import { argonTheme } from '../constants';
const { width, height } = Dimensions.get('screen');

class Home extends React.Component {
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
                <Text size={24}>Add Device</Text>
              </Block>
              <Block>
                <Input borderless placeholder="Device Name"/>
              </Block>
              <Block>
              <Input borderless placeholder="Mac Address"/>
                </Block>
                <Block>
                  <Button title='close' onPress={this.setModalVisible.bind(this, false)}> 
                    <Text color={argonTheme.COLORS.WHITE}> Save Device </Text>
                    </Button>
                </Block>
            </View>
          </View>
        </Modal>

        <TouchableHighlight>
            <Button onPress={() => {
            this.setModalVisible(true);
          }}>Add new device</Button>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderDevices()}
        {this.renderModal()}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  icons: {
    
  }
});

export default Home;
