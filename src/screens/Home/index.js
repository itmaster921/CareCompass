import React, { Component } from 'react';
import { Image, ImageBackground, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { Colors, Images, FontSizes } from '@theme';
import Styles from './styles';
import { MediaQuery } from 'react-native-responsive';
import store from '../../Store';
import { Card, ArrowText } from '@components';
import Text from '@text';

const { height, width } = Dimensions.get('window');

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		console.log(Dimensions.get('window'));
	}

	gotoRoute(routeName, pageName) {
		store.activeRoute = routeName;
		store.routesInStack.push(routeName);
		var key = routeName;
		this.props.navigation.navigate(
			routeName,
			{
				pageName: pageName
			},
			null,
			key
		);
	}

	render() {
		return (
			<View style={Styles.container}>
				<ScrollView contentContainerStyle={Styles.scrollView} scrollEnabled={false}>
					<Card
						style={Styles.discussion_starter}
						contentStyle={Styles.discussion_starter_content}
						onPress={() => {
							this.gotoRoute('DiscussionStarter');
						}}
					>
						<Image source={Images.discussion_starter} style={Styles.ds_icon} />
						<MediaQuery minDeviceWidth={768}>
							<ArrowText mediumLarge bold color={Colors.white} style={Styles.ds_text}>
								Use discussion starter{" "}
							</ArrowText>
						</MediaQuery>
						<MediaQuery maxDeviceWidth={767}>
							<Text medium bold color={Colors.white}>
								Use discussion starter
							</Text>
						</MediaQuery>
					</Card>
					<View style={Styles.bottom_container}>
						<Card
							style={Styles.item}
							contentStyle={Styles.item_content}
							onPress={() => {
								this.gotoRoute('Page', 'looking_after_yourself');
							}}
						>
							<MediaQuery minDeviceWidth={768}>
								<Image source={Images.looking_after} style={Styles.bottom_icon} />
							</MediaQuery>
							<Text medium bold light center style={Styles.left_item_text}>
								Looking after yourself
							</Text>
						</Card>
						<Card
							style={Styles.item}
							contentStyle={Styles.item_content}
							onPress={() => {
								this.gotoRoute('UserGuides');
							}}
						>
							<MediaQuery minDeviceWidth={768}>
								<Image source={Images.more_info} style={Styles.bottom_icon} />
							</MediaQuery>
							<Text medium bold light style={Styles.left_item_text}>
								Using the app
							</Text>
						</Card>
						<Card
							style={Styles.item}
							contentStyle={Styles.item_content}
							onPress={() => {
								this.gotoRoute('Resources');
							}}
						>
							<MediaQuery minDeviceWidth={768}>
								<Image source={Images.library_pink} style={Styles.bottom_icon} />
							</MediaQuery>
							<Text medium bold light style={Styles.left_item_text}>
								Resource library
							</Text>
						</Card>
					</View>
				</ScrollView>
			</View>
		);
	}
}
