/**
 * @providesModule router
 */

import React, { Component } from "react";
import {
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  Linking
} from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  NavigationActions
} from "react-navigation";

import { Colors, FontSizes, Images } from "./theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "./components";
import Menu from "./Menu";
import Splash from "./screens/Splash";
import OnBoarding from "./screens/OnBoarding";
import Home from "./screens/Home";
import {
  DSIntro,
  ActivityList,
  Activity,
  UpNext,
  Complete
} from "./screens/DiscussionStarter";
import {
  CDIntro,
  CDSingleView,
  CDListView,
  CDSummary,
  CDAddYourOwn
} from "./screens/CardGame";
import { ResourceList, ResourceDetail } from "./screens/Resources";
import { UserGuidesList, UserGuidesDetail } from "./screens/UserGuides";
import { LookingAfterYourself } from "./screens/GetHelp";
import Page from "./screens/Page";
import { deviceWidth, deviceHeight } from "./components/ResponsiveDimensions";
import store from "./Store";
import { MediaQuery } from "react-native-responsive";

var drawerNavigator = null;

export const navigateToUrl = (url, navigation) => {
  const routeUrls = [
    {
      url: "https://cc-api.techequipt.com.au/app/discussion-starter",
      routeName: "DiscussionStarter",
      pageName: ""
    },
    {
      url: "https://cc-api.techequipt.com.au/app/user-guides",
      routeName: "UserGuides",
      pageName: ""
    },
    {
      url: "https://cc-api.techequipt.com.au/app/resources",
      routeName: "Resources",
      pageName: ""
    },
    {
      url: "https://cc-api.techequipt.com.au/app/looking-after-yourself",
      routeName: "Page",
      pageName: "looking_after_yourself"
    },
    {
      url: "https://cc-api.techequipt.com.au/app/art-gallery",
      routeName: "Page",
      pageName: "art_gallery"
    }
  ];
  if (url) {
    let routeUrl = routeUrls.find(routeUrl => routeUrl.url == url);
    if (routeUrl) {
      store.activeRoute = routeUrl.routeName;
      store.activePage = routeUrl.pageName;
      store.routesInStack.push(routeUrl.routeName);
      var key = `${routeUrl.routeName} ${store.routesInStack.length}`;
      navigation.navigate(
        routeUrl.routeName,
        {
          pageName: routeUrl.pageName
        },
        null,
        key
      );
    } else {
      Linking.openURL(url).catch(err =>
        console.error("An error occurred", err)
      );
    }
  }
};

export const checkAndGo = goCallback => {
  const CHECK_ROUTES = ["DiscussionStarter", "CardGame"];
  if (CHECK_ROUTES.includes(store.activeRoute)) {
    setTimeout(() => {
      Alert.alert(
        "Are you sure?",
        "Any information you have entered will be deleted.",
        [
          {
            text: "NO",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "YES",
            onPress: () => {
              goCallback();
            }
          }
        ],
        { cancelable: false }
      );
    }, 500);
  } else {
    goCallback();
  }
};

export const gotoHome = () => {
  const resetAction = NavigationActions.reset({
    index: 0,
    key: "Home",
    actions: [NavigationActions.navigate({ routeName: "Home" })]
  });
  store.topNavigator.dispatch(resetAction);
};

const headerStyle = {
  backgroundColor: Colors.Navy,
  height: deviceHeight(6)
};

const HeaderTitle = () => {
  return (
    <Text
      light
      medium
      bold
      center
      style={{
        position: "absolute",
        width: "100%",
        zIndex: -1
      }}
    >
      Care Compass
    </Text>
  );
};

class Footer extends Component {
  componentDidMount() {
    Dimensions.addEventListener("change", () => {
      this.forceUpdate();
    });
  }
  render() {
    const { height } = Dimensions.get("window");
    return height > 414 ? (
      <View
        style={{
          height: deviceHeight(5),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: deviceWidth(2),
          backgroundColor: Colors.Navy,
          overflow: "hidden"
        }}
      >
        <Text light>© Palliative Care Australia 2018 </Text>
        <MediaQuery minDeviceWidth={768}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: deviceWidth(1)
            }}
            onPress={() => {
              let routeName = "Page";
              let pageName = "privacy_collection";
              const key = `${routeName} ${store.routesInStack.length}`;
              store.activeRoute = routeName;
              store.activePage = pageName;
              store.routesInStack.push(key);
              this.props.navigation.navigate(
                routeName,
                {
                  pageName: pageName
                },
                null,
                key
              );
            }}
          >
            <View style={{ flex: 1 }} />
            <Text light right small>
              Read PCA’s Privacy Collection Statement here
            </Text>
          </TouchableOpacity>
        </MediaQuery>
      </View>
    ) : (
      <View />
    );
  }
}

const withFooter = Screen => {
  const screen = props => {
    return (
      <View style={{ flex: 1 }}>
        <Screen {...props} />
        <SafeAreaView style={{ backgroundColor: Colors.Navy }}>
          <Footer {...props} />
        </SafeAreaView>
      </View>
    );
  };
  screen.router = Screen.router;
  return screen;
};

const MenuIcon = () => {
  return (
    <Icon.Button
      name="bars"
      size={FontSizes.medium}
      style={{
        height: deviceHeight(4.5),
        paddingHorizontal: 10,
        marginHorizontal: deviceHeight(1)
      }}
      backgroundColor={"#0000"}
      onPress={() => drawerNavigator.navigate("DrawerOpen")}
    >
      <Text light bold>
        Menu
      </Text>
    </Icon.Button>
  );
};

const WelcomeIcon = ({ dispatch }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: deviceWidth(1)
      }}
      onPress={() => {
        const resetAction = NavigationActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({ routeName: "OnBoardingScreen" })
          ]
        });
        store.topNavigator.dispatch(resetAction);
      }}
    >
      <Image
        source={Images.welcome_arrow}
        style={{
          width: deviceWidth(5),
          height: deviceWidth(3.5),
          resizeMode: "contain"
        }}
      />
      <Text light bold>
        Welcome
      </Text>
    </TouchableOpacity>
  );
};

const HomeIcon = props => {
  return (
    <Icon.Button
      name="home"
      size={FontSizes.medium}
      style={{ height: deviceHeight(4.5), paddingHorizontal: 10 }}
      backgroundColor={"#0000"}
      onPress={() => {
        checkAndGo(() => {
          gotoHome();
          store.activeRoute = null;
          store.routesInStack = [];
        });
      }}
    >
      <Text light bold>
        Home
      </Text>
    </Icon.Button>
  );
};

export const DiscussionStarterStack = StackNavigator(
  {
    DSIntro: { screen: DSIntro },
    ActivityList: { screen: ActivityList },
    Activity: { screen: Activity },
    UpNext: { screen: UpNext },
    Complete: { screen: Complete }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: <HeaderTitle />,
      headerStyle: headerStyle,
      headerRight: <MenuIcon {...navigation} />,
      headerLeft: <HomeIcon {...navigation} />,
      gesturesEnabled: false
    })
  }
);

export const CardGameStack = StackNavigator(
  {
    CDIntro: { screen: CDIntro },
    CDSingleView: { screen: CDSingleView },
    CDListView: { screen: CDListView },
    CDSummary: { screen: CDSummary },
    CDAddYourOwn: { screen: CDAddYourOwn }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: <HeaderTitle />,
      headerStyle: headerStyle,
      headerRight: <MenuIcon {...navigation} />,
      headerLeft: <HomeIcon {...navigation} />,
      gesturesEnabled: false
    })
  }
);

export const ResourcesStack = StackNavigator(
  {
    ResourceList: { screen: ResourceList },
    ResourceDetail: { screen: ResourceDetail }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: <HeaderTitle />,
      headerStyle: headerStyle,
      headerRight: <MenuIcon {...navigation} />,
      headerLeft: <HomeIcon {...navigation} />
    })
  }
);

export const UserGuidesStack = StackNavigator(
  {
    UserGuidesList: { screen: UserGuidesList },
    UserGuidesDetail: { screen: UserGuidesDetail }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: <HeaderTitle />,
      headerStyle: headerStyle,
      headerRight: <MenuIcon {...navigation} />,
      headerLeft: <HomeIcon {...navigation} />
    })
  }
);

export const GetHelpStack = StackNavigator(
  {
    LookingAfterYourself: { screen: LookingAfterYourself }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: <HeaderTitle />,
      headerStyle: headerStyle,
      headerRight: <MenuIcon {...navigation} />,
      headerLeft: <HomeIcon {...navigation} />
    })
  }
);

export const PageStack = StackNavigator(
  {
    Page: { screen: Page }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: <HeaderTitle />,
      headerStyle: headerStyle,
      headerRight: <MenuIcon {...navigation} />,
      headerLeft: <HomeIcon {...navigation} />
    })
  }
);

const HomeWithHeader = ({ navigation }) => {
  homeNavigator = navigation;
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: Colors.Navy }}>
        <View
          style={[
            headerStyle,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }
          ]}
        >
          <WelcomeIcon {...navigation} />
          <HeaderTitle />
          <MenuIcon />
        </View>
      </SafeAreaView>
      <Home navigation={navigation} />
    </View>
  );
};

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: HomeWithHeader
    },
    DiscussionStarter: {
      screen: DiscussionStarterStack
    },
    CardGame: {
      screen: CardGameStack
    },
    Resources: {
      screen: ResourcesStack
    },
    UserGuides: {
      screen: UserGuidesStack
    },
    GetHelp: {
      screen: GetHelpStack
    },
    Page: {
      screen: PageStack
    }
  },
  {
    headerMode: "none",
    initialRouteKey: "Home"
  }
);

export const DrawerStack = DrawerNavigator(
  {
    Home: {
      screen: withFooter(HomeStack)
    }
  },
  {
    drawerWidth: deviceWidth(100) >= 768 ? deviceWidth(40) : deviceWidth(80),
    drawerPosition: "right",
    contentComponent: props => {
      drawerNavigator = props.navigation;
      return <Menu {...props} />;
    }
  }
);

export const PrimaryNav = StackNavigator(
  {
    SplashScreen: { screen: Splash },
    OnBoardingScreen: { screen: withFooter(OnBoarding) },
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);
