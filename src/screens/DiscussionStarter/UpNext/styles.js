import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Colors, FontSizes, MediaQueries, Metrics } from '@theme';

const { width } = Dimensions.get('window');

import { MediaQueryStyleSheet } from 'react-native-responsive';
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from '@ResponsiveDimensions';

export default MediaQueryStyleSheet.create(
	{
		container: {
			flex: 1,
			backgroundColor: Colors.yellow
		},

		contentView: {
			flexGrow: 1,
			padding: deviceWidth(3),
		},

		current: {
			borderRadius: deviceWidth(1.2),
			overflow: 'hidden'
		},

		next: {
			marginVertical: deviceHeight(2),
		},

		currentHeader: {
			padding: deviceWidth(0.5),
			flexDirection: 'row',
			backgroundColor: Colors.Navy,
			alignItems: 'center',
			justifyContent: 'space-between'
		},

		upnextHeader: {
			padding: deviceWidth(2),
			backgroundColor: Colors.Navy,
			alignItems: 'center',
		},

		upnextBody: {
			padding: deviceWidth(2),
		},

		currentDescView: {
			backgroundColor: '#fff',
			padding: deviceWidth(2),
			alignItems: 'center'
		},

		currentTitle: {
			marginBottom: deviceWidth(2),
		},

		nextTitle: {
			marginBottom: deviceWidth(2),
		},

		nextPrecomment: {},

		later: {
			marginVertical: deviceWidth(2)
		},

		later_text: {
			marginBottom: deviceWidth(2)
		},

		buttonBar: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			paddingHorizontal: deviceWidth(1),
			paddingBottom: deviceWidth(1)
		},

		checkIcon: {
			width: deviceHeight(3.6),
			height: deviceHeight(3.6),
			marginHorizontal: deviceWidth(1),
			tintColor: '#fff'
		}
	},
	{
		[MediaQueries.iPhone]: {
			buttonBar: {
				paddingHorizontal: deviceWidth(2.8)
			},
		}
	}
);
