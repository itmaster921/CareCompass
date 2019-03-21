import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ScrollView,
  AsyncStorage,
  FlatList
} from "react-native";

import { Colors, Images } from "@theme";
import Styles from "./styles";
import { Button, Loader, Card } from "@components";
import Text from "@text";

import { getDiscussionStarter } from "@api";
import { MediaQuery } from "react-native-responsive";
import {
  deviceWidth,
  deviceHeight,
  windowHeight,
  windowWidth
} from "@ResponsiveDimensions";

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discussionStarter: {},
      loaderVisible: false,
      activities: []
    };
  }

  async componentDidMount() {
    let json = null;
    if ((await AsyncStorage.getItem("discussion_starter")) == undefined) {
      this.setState({ loaderVisible: true });
      json = await getDiscussionStarter();
      this.setState({ loaderVisible: false });
    } else {
      json = await getDiscussionStarter();
    }

    let discussionStarter = json[0];
    const activities = discussionStarter.discussion_starter;
    this.setState({
      discussionStarter,
      activities
    });
  }

  startActivity(activityIndex) {
    const { navigate } = this.props.navigation;
    navigate("Activity", {
      activityIndex,
      discussionStarter: this.state.discussionStarter
    });
  }

  renderActivityItem = ({ item, index }) => {
    return (
      <Card
        style={Styles.item}
        contentStyle={Styles.item_content}
        onPress={() => this.startActivity(index)}
      >
        <Text mediumLarge center style={Styles.item_number}>
          {index + 1}
        </Text>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text light center style={Styles.item_text}>
            {item.stage}
          </Text>
        </View>
        <MediaQuery minDeviceWidth={768}>
          <Button
            light
            color={Colors.white}
            onPress={() => this.startActivity(index)}
          >
            {item.body ? "Read Now" : "Start Now"}
          </Button>
        </MediaQuery>
      </Card>
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { discussionStarter } = this.state;
    return (
      <View style={Styles.container}>
        <Loader loading={this.state.loaderVisible} />
        <ScrollView contentContainerStyle={Styles.scrollView}>
          <Card topbar style={Styles.titleView}>
            <Text mediumLarge center color={Colors.navy} style={Styles.title}>
              Discussion Starter
            </Text>
            <Text medium style={Styles.subtitle} color={Colors.Navy}>
              {discussionStarter.subheading ||
                "Supporting you to talk about how you want to be cared for at the end of your life"}
            </Text>
          </Card>
          <Card style={Styles.descView}>
            <Text style={Styles.intro}>{discussionStarter.intro}</Text>
          </Card>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            data={this.state.activities}
            renderItem={this.renderActivityItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={Styles.flatList}
          />
        </ScrollView>
      </View>
    );
  }
}
