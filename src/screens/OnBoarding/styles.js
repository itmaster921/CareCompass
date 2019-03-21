/**
 * @providesModule @OnBoardingstyles
 */

import React, { Component } from 'react';
import { Platform, Dimensions, orientation } from 'react-native';

//import {Colors} from '../../theme'; // use for theme color
import { Colors, MediaQueries } from '@theme';
const { width, height } = Dimensions.get('window'); // Detect screen width and height
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'; // use for responsive screen UI
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from '@ResponsiveDimensions';
import { MediaQueryStyleSheet } from 'react-native-responsive';

export default MediaQueryStyleSheet.create(
	{
		slide: {
			width: deviceWidth(90),
			alignItems: 'center',
			borderRadius: deviceWidth(1),
			marginBottom: deviceWidth(8),
			marginHorizontal: deviceWidth(5),
			overflow: 'hidden'
		},

		slideLandscape: {
			backgroundColor: 'red',
			width: deviceHeight(100) - deviceWidth(10),
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: deviceWidth(1),
			marginBottom: deviceWidth(8),
			marginHorizontal: deviceWidth(5),
			overflow: 'hidden'
		},

		scrollcontainer: {
			flexGrow: 1,
			paddingVertical: deviceHeight(2)
		},

		middleimage: {
			alignItems: 'center',
			justifyContent: 'center'
		},
		
		middleicon: {
			height: deviceHeight(23),
			width: deviceWidth(40)
		},

		descText: {
			fontSize: deviceHeight(2.0),
			textAlign: 'center',
			color: Colors.Navy
		},

		title: {
			margin: deviceWidth(5),
		}, 

		titleText: {
			textAlign: 'center',
			color: Colors.navy
		},

		subTitleText: {
			textAlign: 'center',
			color: Colors.navy,
			marginTop: deviceWidth(1)
		},

		container: {
			flex: 1,
			backgroundColor: Colors.yellow,
			justifyContent: 'center',
			alignItems: 'center'
		},

		cardDetails: {
			alignItems: 'center',
			backgroundColor: Colors.white,
			height: deviceHeight(29),
			width: '100%',
			height: '50%',
		},

		cardDetailsLandscape: {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: Colors.white,
			height: deviceHeight(29),
			width: '50%',
			height: '100%',
		},

		pagination: {
			flexDirection: 'row',
			justifyContent: 'center',
			marginVertical: deviceHeight(2)
		},

		dot: {
			backgroundColor: Colors.white,
			width: deviceWidth(6),
			height: deviceHeight(0.6),
			borderWidth: 1,
			borderColor: Colors.red,
			marginLeft: 2,
			marginRight: 2
		},

		activeDot: {
			backgroundColor: Colors.red
		},

		buttonContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center'
		},

		buttonPrev: {
			width: deviceWidth(20),
			paddingVertical: deviceHeight(1),
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: deviceHeight(1)
		},
		buttonNext: {
			width: deviceWidth(20),
			paddingVertical: deviceHeight(1),
			borderWidth: 2,
			borderColor: Colors.Navy,
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: deviceHeight(1)
		},

		buttonpageView: {
			// width: deviceWidth(70)
		},

		textView: {
			paddingHorizontal: deviceWidth(2),
			flex: 1,
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center'
		},
	},
	{
		[MediaQueries.iPad]: {
		},
		[MediaQueries.iPhone]: {

		}
	}
);
