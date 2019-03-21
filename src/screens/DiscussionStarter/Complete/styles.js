import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Colors, FontSizes, MediaQueries, Metrics } from '@theme';

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

		titleView: {
		},

		flatList: {
			justifyContent: 'center',
			marginVertical: deviceWidth(2),
		},

		current: {
			marginBottom: deviceWidth(2),
		},

		currentHeader: {
			padding: deviceWidth(0.5),
			flexDirection: 'row',
			backgroundColor: Colors.Navy,
			alignItems: 'center',
			justifyContent: 'space-between'
		},

		currentDescView: {
			backgroundColor: '#fff',
			padding: deviceWidth(2),
			alignItems: 'center'
		},

		currentTitle: {
			marginBottom: deviceWidth(1),
		},

		currentPrecomment: {},

		saveView: {
		},

		saveViewContent: {
			paddingHorizontal: deviceWidth(7),
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

			saveViewContent: {
				paddingHorizontal: deviceWidth(2),
			},	
		}
	}
);
