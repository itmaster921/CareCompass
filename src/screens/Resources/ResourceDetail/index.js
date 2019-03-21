import React, { Component } from "react";
import {
  Image,
  View,
  Linking,
  ScrollView,
  ImageBackground
} from "react-native";

import Styles from "./styles";
import Text from "@text";
import Button from "@button";
import { getResources } from "@api";
import { Loader, Card } from "@components";
import {
  deviceWidth,
  deviceHeight,
  windowHeight,
  windowWidth
} from "@ResponsiveDimensions";
import { htmlStyles, Images, Colors } from '@theme';
import HTML from 'react-native-render-html';
import {exportHelpPdf} from '@helppdf';
import {navigateToUrl} from 'router';

var BASE_URL = "https://cc-api.techequipt.com.au";

export default class ResourceDetail extends Component {
  constructor(props) {
    super(props);
    const { resourceIndex } = this.props.navigation.state.params;
    this.state = {
      resourceIndex: resourceIndex,
      title: "",
      information_text: "",
      link: "",
      image: ""
    };
  }

  async componentDidMount() {
    const ds = await getResources();
    const resources = ds.resources;
    const resource = resources[this.state.resourceIndex];

    this.setState({
      title: resource.title,
      information_text: resource.information_text,
      link: resource.link,
      image: resource.image ? BASE_URL + resource.image.url : ""
    });
  }
  
  exportPage = async () => {
		await exportHelpPdf(this.state.title, this.state.information_text)
  }
  
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView contentContainerStyle={Styles.scroll}>
          <Card
            topbar={{ color: Colors.navy }}
            style={Styles.titleView}
            contentStyle={{ padding: deviceWidth(3) }}
          >
            <Text large center style={Styles.title}>
              {this.state.title}
            </Text>
          </Card>

          <Card style={[Styles.itemView]}>
            <View style={{ margin: deviceWidth(3) }}>
              {this.state.image && (
                <Image
                  style={[Styles.middleimage]}
                  resizeMode="contain"
                  source={{ uri: this.state.image }}
                />
              )}
              <HTML 
                html={this.state.information_text} 
                tagsStyles={htmlStyles} 
                onLinkPress={(e, url) => navigateToUrl(url, this.props.navigation)}
              />
            </View>
            <View style={Styles.buttonBar}>
              <Button light bold onPress={() => this.props.navigation.goBack()}>
                Back
              </Button>
              <View style={{flex: 1}}/>
              <Button
                bold
                light
                onPress={this.exportPage}
              >
                Export
              </Button>
              {this.state.link && (
                <Button
                  dark
                  bold
                  onPress={() =>
                    Linking.openURL(this.state.link).catch(err =>
                      console.error("An error occurred", err)
                    )
                  }
                >
                  Find out more
                </Button>
              )}
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
