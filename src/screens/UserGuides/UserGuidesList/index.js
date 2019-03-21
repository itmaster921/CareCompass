import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  View,
  ScrollView,
  AsyncStorage,
  ImageBackground,
  Dimensions
} from "react-native";

import Styles from "./styles";
import { Button, Loader, Card, Text } from "@components";
import { getUserGuides, updateTimeInterval } from "@api";
import { Colors, Images, FontSizes } from "@theme";
import { MediaQuery } from "react-native-responsive";
import {
  deviceWidth,
  deviceHeight,
  windowHeight,
  windowWidth
} from "@ResponsiveDimensions";

const { width, height } = Dimensions.get("window");

export default class UserGuidesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discussionStarterGuide: {},
      cardGameGuide: {},
      otherUserguides: [],
      loaderVisible: false,
      isVisibleArtwork: false
    };
  }

  async componentDidMount() {
    var json = await getUserGuides(true);
    if (!json) {
      this.setState({ loaderVisible: true });
      json = await getUserGuides(false);
      this.setState({ loaderVisible: false });
    }
    const userguides = json[0].guides || [];
    console.log(userguides);
    let discussionStarterGuide = userguides.find(
      ug => ug.slug == "discussion-starter"
    );
    let cardGameGuide = userguides.find(ug => ug.slug == "card-game");
    let otherUserguides = userguides.filter(
      ug => ug.slug != "discussion-starter" && ug.slug != "card-game"
    );

    this.setState({ discussionStarterGuide, cardGameGuide, otherUserguides });
  }

  renderUserGuideItem = ({ item, index }) => {
    const { navigate } = this.props.navigation;

    return (
      <Card
        style={Styles.item}
        contentStyle={Styles.item_content}
        onPress={() => {
          navigate("UserGuidesDetail", { userguide: item });
        }}
      >
        <View
          style={[Styles.cardView, { paddingHorizontal: deviceWidth(0.5) }]}
        >
          <View>
            <Image
              source={Images.icon_professional}
              resizeMode="stretch"
              style={Styles.smallIcon}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: deviceWidth(5)
            }}
          >
            <Text smallmedium bold style={[Styles.cardtitle]}>
              {item.title}
            </Text>
          </View>
        </View>
      </Card>
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.container}>
        <ScrollView contentContainerStyle={Styles.scroll}>
          <View
            onLayout={e => {
              let { height: contentHeight } = e.nativeEvent.layout;
              let { height } = Dimensions.get("window");
              let imageHeight = deviceWidth((50 * 303) / 388);
              console.log({ height, contentHeight, imageHeight });
              this.setState({
                isVisibleArtwork: height - contentHeight - 144 > imageHeight
              });
            }}
          >
            <Loader loading={this.state.loaderVisible} />
            <Card
              topbar={{ color: Colors.Navy }}
              style={Styles.titleView}
              contentStyle={Styles.title_content}
            >
              <Text large center style={Styles.title}>
                Using the app
              </Text>
              <Text medium style={Styles.subtitle}>
                Using and getting the most out of the care compass app
              </Text>
            </Card>

            <FlatList
              numColumns={width < 768 ? 1 : 2}
              columnWrapperStyle={
                width < 768 ? null : { justifyContent: "space-between" }
              }
              ListHeaderComponent={
                <View
                  style={{ alignItems: "center", marginBottom: deviceWidth(2) }}
                >
                  <Card
                    style={{
                      backgroundColor: Colors.navy,
                      width: width < 768 ? "100%" : "60%"
                    }}
                    contentStyle={{ alignItems: "center" }}
                    onPress={() => {
                      navigate("UserGuidesDetail", {
                        userguide: this.state.discussionStarterGuide
                      });
                    }}
                  >
                    <View style={Styles.icon_wrap}>
                      <Image
                        source={Images.discussion_starter}
                        style={Styles.icon}
                      />
                    </View>
                    <View style={Styles.cardView}>
                      <Text
                        smallmedium
                        light
                        bold
                        style={{ marginVertical: deviceWidth(2) }}
                      >
                        Discussion Starter Guide
                      </Text>
                    </View>
                  </Card>
                </View>
              }
              data={this.state.otherUserguides}
              renderItem={this.renderUserGuideItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        {this.state.isVisibleArtwork && (
          <Image
            source={Images.image_app_instructions}
            style={{
              zIndex: -1,
              position: "absolute",
              bottom: 0,
              right: 0,
              width: deviceWidth(50),
              height: deviceWidth((50 * 303) / 388),
              resizeMode: "contain"
            }}
          />
        )}
      </View>
    );
  }
}
