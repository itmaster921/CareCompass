import React, { Component } from "react";
import { Image, ImageBackground, Text, View, ScrollView, Dimensions } from "react-native";
import { MySpinner, Button} from "@components";

import { Images } from "@theme";
import Styles from "./styles";
import { getBundle } from "@api";
import { deviceWidth, deviceHeight } from "@ResponsiveDimensions";

export default class Splash extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    let json = await getBundle();
    this.setState({ loading: false });
    Dimensions.addEventListener('change', ()=>{
			this.forceUpdate();
		})
  }

  onBegin = () => {
    const { navigate } = this.props.navigation;
    navigate("OnBoardingScreen");
  }

  render() {
    const { height, width } = Dimensions.get('window');
    let imageHeight = width / 768 * 693;
    let imageStyle = {
      width: width,
      height: imageHeight,
    }
    if(imageHeight + 250 > height){
      imageStyle.top = 250;
    }else{
      imageStyle.bottom = 0;
    }
    return (
      <View
        style={Styles.backgroundImage}
      >
        <Image 
          source={Images.onboarding_image} 
          style={[
            Styles.onboarding_image,
            imageStyle
          ]}
        />
        <ScrollView
          contentContainerStyle={Styles.scrollView}
        >
          <View style={Styles.circle_above}>
            <Image source={Images.dtt_blue} style={Styles.dtt_logo} />
            <Text style={Styles.app_name}>Care Compass</Text>
            <Text style={Styles.text_desc}>
              Supporting people living with{'\n'}
              dementia to work out what is{'\n'}
              right for them
            </Text>
            {this.state.loading ? (
              <MySpinner
                loading={this.state.loading}
                size={60}
                style={Styles.spinner}
              />
            ):(
              <View style={{marginVertical: 20, justifyContent: 'center'}}>
                <Button dark bold onPress={this.onBegin} textStyles={{fontSize: 20}}>Begin</Button>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
