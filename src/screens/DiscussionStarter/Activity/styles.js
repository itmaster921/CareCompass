import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Colors, FontSizes, MediaQueries, Metrics } from '@theme';

const { width } = Dimensions.get('window');

import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from 'react-native-responsive';
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from '@ResponsiveDimensions';

export default MediaQueryStyleSheet.create(
	{
		container: {
			flex: 1,
			backgroundColor: Colors.grey
		},

		pregressBar: {
			marginHorizontal: deviceWidth(13),
			marginVertical: deviceWidth(1)
		},

		title: {
			margin: deviceWidth(1),
			flexDirection: 'row',
			justifyContent: 'center',
			flexWrap: 'wrap'
		},

		questionItem: {
			backgroundColor: '#fff',
		},

		questionItemContent: {
			flex: 1,
			padding: 0,
		},

		itemBody: {
			borderColor: Colors.gray,
			borderTopWidth: 1,
			borderBottomWidth: 1,
			padding: deviceWidth(2),
		},

		questionTitle: {
			margin: deviceWidth(2),
			flexDirection: 'row',
			justifyContent: 'space-between'
		},

		questionContainer: {
			width: '80%',
			flexGrow: 1
		},

		textArea: {
			backgroundColor: Colors.backgroundSecondary,
			height: deviceWidth(24),
			color: Colors.textPrimary,
			fontSize: FontSizes.smallMedium,
			padding: deviceWidth(1.2),
			borderWidth: 1,
			borderColor: '#222222'
		},

		buttonBar: {
			backgroundColor: Colors.white,
			margin: deviceWidth(3),
		},

		buttonBarContent: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			backgroundColor: Colors.white,
		},

		titleView: {
			marginBottom: deviceWidth(2)
		},

		scrollView: {
			flexGrow: 1,
			paddingHorizontal: deviceWidth(3),
			paddingTop: deviceWidth(3),
		},

		itemBottom: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			paddingHorizontal: deviceWidth(2),
			paddingVertical: deviceWidth(1)
		},

		answerButtonWrapper: {
			marginVertical: deviceWidth(1),
		},

		answerButton: {
			paddingVertical: deviceWidth(0.5),
			paddingHorizontal: deviceWidth(1),
			flexDirection: 'row',
			alignItems: 'center'
		},

		answerButtonOn: {
			backgroundColor: Colors.green,
			paddingVertical: deviceWidth(0.5),
			paddingHorizontal: deviceWidth(1),
			flexDirection: 'row',
			alignItems: 'center'
		},

		sound: {
			width: deviceHeight(2*13/11),
			height: deviceHeight(2),
		},

		soundButton: { 
			borderRadius: 5,
			backgroundColor: Colors.navy, 
			paddingVertical: deviceWidth(1.7), 
			paddingHorizontal: deviceWidth(1), 
			marginVertical: deviceWidth(1),
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		}
	},
	{
		[MediaQueries.iPhone]: {
			itemBottom: {
				flexDirection: 'column'
			},
			answerButtonWrapper: {
			}
		}
	}
);
