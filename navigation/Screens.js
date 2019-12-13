import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Hubs from "../screens/Hubs";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Logout from "../screens/Logout"
import Register from "../screens/Register";
// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";
import DeviceDetails from "../screens/Device-details";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ElementsStack = createStackNavigator({
  Elements: {
    screen: Pro,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Elements" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ArticlesStack = createStackNavigator({
  Articles: {
    screen: Pro,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Articles" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header title="Profile" navigation={navigation}/>
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);
const HubStack = createStackNavigator(
  {
    Hubs: {
      screen: Hubs,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="Hubs" navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Devices" navigation={navigation} />
      })
    },
    Hubs: {
      screen: Hubs,
      navigationOptions: ({ navigation }) => ({
        header:<Header search options title="Hubs" navigation={navigation} />
      })
    },
    DeviceDetails: {
      screen: DeviceDetails,
      navigationOptions: ({ navigation }) => ({
        header:<Header search title="Device Details" navigation={navigation} />
      })
    },
  },
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);
// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh
const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Register,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        drawerLabel: () => {}
      },
    },
    Pro: {
      screen: Pro,
      navigationOptions: {
        drawerLabel: () => {}
      },
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Home" />
        )
      })
    },
    Hubs: {
      screen: HubStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Hubs" />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Profile" />
        )
      })
    },
    // Account: {
    //   screen: Register,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Register" title="Account" />
    //     )
    //   })
    // },
    Logout: {
      screen: Logout,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Logout" title="Logout" />
        )
      })
    },
    // Elements: {
    //   screen: ElementsStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Elements" title="Elements" />
    //     )
    //   })
    // },
    // Articles: {
    //   screen: ArticlesStack,
    //   navigationOptions: navOpt => ({
    //     drawerLabel: ({ focused }) => (
    //       <DrawerItem focused={focused} screen="Articles" title="Articles" />
    //     )
    //   })
    // }
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
