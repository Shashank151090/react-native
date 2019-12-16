import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

export default class Policy extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <ImageBackground
            source={Images.Pro}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block style={{marginLeft: 10}}>
              <Block style={{marginTop: 20}}>
                <Block>
                  <Text color="white" size={24}>Privacy Policy...</Text>
                </Block>
                <Block>
                </Block>
              </Block>
              <Text size={16} color='rgba(255,255,255,0.6)' style={{ marginTop: 20 }}>
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
                The requested feture is not been implemented yet. Will notify you once it's available.
              </Text>
              <Block row style={{ marginTop: theme.SIZES.BASE * 1.5, marginBottom: theme.SIZES.BASE * 4 }}>
                <Image
                  source={Images.iOSLogo}
                  style={{ height: 38, width: 82, marginRight: theme.SIZES.BASE * 1.5 }} />
                <Image
                  source={Images.androidLogo}
                  style={{ height: 38, width: 140 }} />
              </Block>
              <Button
                shadowless
                style={styles.button}
                color={argonTheme.COLORS.INFO}
                onPress={() => navigation.navigate('Onboarding')}>
                <Text bold color={theme.COLORS.WHITE}>Back to SignUp</Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
    zIndex: 3,
    position: 'absolute',
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    paddingLeft: 10,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  policy: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
    marginTop: 15
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
});
