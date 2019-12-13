import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback, Picker } from 'react-native';
import { Block, theme, Icon, Text } from 'galio-framework';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
// import { Block, Text, theme, Button } from 'galio-framework';

 
import { Card, Button } from '../components';
import devices from '../constants/devices';
import { argonTheme } from '../constants';
const { width } = Dimensions.get('screen');
class DeviceDetails extends React.Component {
  state = {
    rule1: '',
    rule2: '',
    rule3: ''
  }
  renderDevices = () => {
    const { navigation, optionLeft, optionRight, horizontal } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.devices}>
          <Block flex  style={styles.cardDescription}>
            <Block row={horizontal} card flex>
              <TouchableWithoutFeedback>
                  <Block flex>
                    <Text size={24} style={styles.cardTitle} bold>Name: </Text>
                    <Text size={20} style={styles.cardTitle} bold>Device MAC: </Text>
                  </Block>
              </TouchableWithoutFeedback>
            </Block>
          </Block>
          <Block flex  style={styles.cardDescription}>
            <Block row={horizontal} card flex>
              <TouchableWithoutFeedback>
                <Block flex space="between">
                  <Text size={24} style={styles.cardTitle} bold>Select Rules</Text>
                  <Block style={{flexDirection: 'row'}}>
                    <Text size={20} style={{width: width/3, marginTop: 10}} bold>Single Click:</Text>
                    <Picker
                      selectedValue={this.state.rule1}
                      style={{height: 50, width: width/2, borderColor: '#0f41d6'}}
                      onValueChange={(itemValue, itemIndex) =>
                      this.setState({rule1: itemValue})}
                    >
                      <Picker.Item label="Switch on the lights" value="lights" />
                      <Picker.Item label="Call a number" value="number" />
                      <Picker.Item label="Order Pizza" value="pizza" />
                    </Picker>
                  </Block>
                  <Block style={{flexDirection: 'row'}}>
                    <Text size={20} style={{width: width/3, marginTop: 10}} bold>Double Click:</Text>
                    <Picker
                      selectedValue={this.state.rule2}
                      style={{height: 50, width: width/2}}
                      onValueChange={(itemValue, itemIndex) =>
                      this.setState({rule2: itemValue})}
                    >
                      <Picker.Item label="Switch on the lights" value="lights" />
                      <Picker.Item label="Call a number" value="number" />
                      <Picker.Item label="Order Pizza" value="pizza" />
                    </Picker>
                  </Block>
                 <Block style={{flexDirection: 'row'}}>
                  <Text size={20} style={{width: width/3, marginTop: 10}} bold>Long Press:</Text>
                    <Picker
                      selectedValue={this.state.rule3}
                      style={{height: 50, width: width/2}}
                      onValueChange={(itemValue, itemIndex) =>
                      this.setState({rule3: itemValue})}
                    >
                      <Picker.Item label="Switch on the lights" value="lights" />
                      <Picker.Item label="Call a number" value="number" />
                      <Picker.Item label="Order Pizza" value="pizza" />
                    </Picker>
                 </Block>
                  <Block middle>
                      <Button color="success" style={styles.createButton} onPress={() => navigation.navigate("Home")}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Save
                        </Text>
                      </Button>
                    </Block>
                </Block>
              </TouchableWithoutFeedback>
            </Block>
          </Block>
          <Block middle>
                      <Button color="error" style={styles.deleteButton} onPress={() => navigation.navigate("Home")}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Delete
                        </Text>
                      </Button>
                    </Block>
        </ScrollView>
      )
    }

  render() {
    return (
      <Block flex center style={styles.deviceDetails}>
        {this.renderDevices()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  deviceDetails: {
    width: width,    
  },
  devices: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  cardDescription: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16,
    padding: theme.SIZES.BASE / 2
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  deleteButton: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  selectTitle: {
   marginTop: 20
  },
});

export default DeviceDetails;
