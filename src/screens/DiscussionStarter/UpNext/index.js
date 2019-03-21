import React, { Component } from 'react';
import { Image, View, ScrollView, ImageBackground } from 'react-native';
import { Colors, Images } from '@theme';
import Styles from './styles';
import Button from '@button';
import Text from '@text';
import Card from '@card';
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from '@ResponsiveDimensions';

export default class UpNext extends Component {
	constructor(props) {
		super(props);
		const { activityIndex, discussionStarter } = this.props.navigation.state.params;
		const activities = discussionStarter.discussion_starter;
		this.state = {
			discussionStarter: discussionStarter,
			activityIndex: activityIndex,
			nextActivityIndex: activityIndex + 1,
			activities: activities,
			activityCount: activities.length
		};
	}

	onEdit = () => {
		const { goBack } = this.props.navigation;
		goBack();
	};

	renderLaterView() {
		var laterActivities = [];
		for (let index = this.state.activityIndex + 2; index < this.state.activityCount; index++) {
			laterActivities.push(this.state.activities[index]);
		}
		return laterActivities.map((activity, index) => (
			<Text key={index.toString()} medium center color={Colors.Navy} style={Styles.currentTitle}>
				Activity {this.state.activityIndex + index + 3}: {activity.stage}
			</Text>
		));
	}

	render() {
		const { navigate, goBack } = this.props.navigation;
		return (
			<View style={Styles.container}>
				<ScrollView contentContainerStyle={Styles.contentView}>
					<Card contentStyle={{padding: 0}}>
						<View style={Styles.currentHeader}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Image source={Images.check} style={Styles.checkIcon} />
								<Text medium bold light>
									Complete
								</Text>
							</View>
							<Button light bold color={'#fff'} onPress={this.onEdit}>
								Edit
							</Button>
						</View>
						<View style={Styles.currentDescView}>
							<Text medium color={Colors.Navy} style={Styles.currentTitle}>
								Activity {this.state.activityIndex + 1}:{' '}
								{this.state.activities[this.state.activityIndex].stage}
							</Text>
							<Text center style={Styles.currentPrecomment}>
								{this.state.activities[this.state.activityIndex].post_completion_text}
							</Text>
						</View>
					</Card>
					{this.state.nextActivityIndex < this.state.activities.length && (
						<Card style={Styles.next} contentStyle={{padding: 0}}>
							<View style={Styles.upnextHeader}>
								<Text medium bold light>
									Up next
								</Text>
							</View>
							<View style={Styles.upnextBody}>
								<View style={{alignItems: 'center'}}>
									<Text medium color={Colors.Navy} style={Styles.nextTitle}>
										Activity {this.state.nextActivityIndex + 1}:{' '}
										{this.state.activities[this.state.nextActivityIndex].stage}
									</Text>
									<Text center style={Styles.nextPrecomment}>
										{this.state.activities[this.state.nextActivityIndex].pre_commencement_text}
									</Text>
								</View>
								{this.state.activityIndex + 2 < this.state.activityCount && (
									<View style={Styles.later}>
										<Text center medium bold color={Colors.Navy} style={{ marginVertical: 8 }}>
											LATER
										</Text>
										{this.renderLaterView()}
									</View>
								)}
							</View>
							<View style={Styles.buttonBar}>
								<Button
									light
									bold
									onPress={() => {
										navigate('Complete', {
											activityIndex: this.state.nextActivityIndex,
											discussionStarter: this.state.discussionStarter
										});
									}}
								>
									Finish here
								</Button>
								<Button
									dark
									bold
									onPress={() => {
										navigate('Activity', {
											activityIndex: this.state.nextActivityIndex,
											discussionStarter: this.state.discussionStarter
										});
									}}
								>
									Start Activity {this.state.activityIndex + 2}
								</Button>
							</View>
						</Card>
					)}
				</ScrollView>

			</View>
		);
	}
}
