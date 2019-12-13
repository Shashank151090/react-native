import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from 'prop-types';

import { Input } from "galio-framework";

import Icon from './Icon';
import { argonTheme } from "../constants";

class MyPopup extends React.PureComponent {
    render() {
        return (
            <Modal 
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                >
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                        {this.props.children}
                    </View>
            </Modal>
        )
    }
}

export default MyPopup;
