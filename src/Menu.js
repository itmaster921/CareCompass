import React, { Component } from 'react';
import { View, Alert, Image, Dimensions, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Colors, Images, MediaQueries } from './theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from '@text';
import { deviceWidth, deviceHeight, windowHeight } from '@ResponsiveDimensions';
import { NavigationActions } from 'react-navigation';
import store from './Store';
import {checkAndGo} from './Router';
import { MediaQueryStyleSheet } from 'react-native-responsive';
let { width, height } = Dimensions.get('window');
const initialOrientation = width > height ? 'LANDSCAPE' : 'PORTRAIT';

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orientation: initialOrientation
		};
	}

	goto(routeName, pageName) {
		this.props.navigation.navigate('DrawerClose');
		if (store.activeRoute == routeName && store.activePage == pageName) return;

		let goToRoute = (routeName, pageName) => {
			setTimeout(() => {
				var key = `${routeName} ${store.routesInStack.length}`;
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
			}, 500);
		};

		checkAndGo(()=>{
			goToRoute(routeName, pageName);
		});
	}

	async componentDidMount() {
		Dimensions.addEventListener('change', ({ window: { width, height } }) => {
			let newOrientation = width > height ? 'LANDSCAPE' : 'PORTRAIT';
			this.setState({
				orientation: newOrientation
			});
		});
	}

	goBackToOnboarding() {
		checkAndGo(()=>{
			const resetAction = NavigationActions.reset({
				index: 0,
				key: null,
				actions: [ NavigationActions.navigate({ routeName: 'OnBoardingScreen' }) ]
			});
			this.props.navigation.dispatch(resetAction);
		});
	}


	render() {
		return (
			<ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: Colors.darkNavy }}>
				<View
					style={{
						backgroundColor: '#fff',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						width: '100%',
						height: 200,
					}}
				>
					<TouchableOpacity style={styles.close} onPress={()=>this.props.navigation.navigate('DrawerClose')}>
						<Icon name='times' size={24} color={Colors.navy}/>
					</TouchableOpacity>
					<Image
						source={Images.dtt_blue}
						style={{
							resizeMode: 'contain',
							width: '70%',
							height: '80%'
						}}
					/>
				</View>
				<View style={styles.menu}>
					<TouchableOpacity style={styles.menuItem} onPress={() => this.goto('Page', 'about_this_app')}>
						<Text light bold color={Colors.white} style={styles.menuItemText}>
							About this app
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() => this.goto('UserGuides')}>
						<Text light bold color={Colors.white} style={styles.menuItemText}>
							Using the app
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() => this.goto('Resources')}>
						<Text light bold color={Colors.white} style={styles.menuItemText}>
							Resource library
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.menuItem}
						onPress={() => this.goto('Page', 'looking_after_yourself')}
					>
						<Text light bold color={Colors.white} style={styles.menuItemText}>
							Looking after yourself
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={styles.menuItem}
						onPress={() => this.goto('Page', 'art_gallery')}
					>
						<Text light bold color={Colors.white} style={styles.menuItemText}>
							Art Gallery
						</Text>
					</TouchableOpacity>
				</View>
				<SafeAreaView style={{ backgroundColor: Colors.darkNavy }}>
					<View style={styles.footer}>
						<Text style={styles.text_footer}>
							Funded by the Australian Government through the Dementia and Aged Care Services Fund
						</Text>
					</View>
				</SafeAreaView>
			</ScrollView>
		);
	}
}

const styles = MediaQueryStyleSheet.create(
	{
		container: {
			flexGrow: 1,
			backgroundColor: Colors.Navy
		},

		icon_dtt: {
			tintColor: '#fff'
		},

		menu: {
			flex: 1,
			padding: 24
		},

		menuItem: {
			paddingVertical: deviceWidth(1.2)
		},

		menuItemText: {
			fontSize: 22
		},

		footer: {
			paddingHorizontal: 8,
			backgroundColor: Colors.darkNavy,
			justifyContent: 'center',
			alignItems: 'center',
			height: deviceHeight(7)
		},

		text_footer: {
			color: '#fff',
			fontSize: deviceHeight(1.6),
			fontStyle: 'italic',
			textAlign: 'center'
		},

		close: {
			position: 'absolute',
			top: deviceWidth(2),
			left: deviceWidth(2),
		}
	},
	{
		[MediaQueries.iPhone]: {
			menuItemText: {
				fontSize: 18
			},

			footer: {
				height: deviceHeight(6)
			},
		}
	}
);
