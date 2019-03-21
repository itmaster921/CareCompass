import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Colors, MediaQueries } from '@theme';

const { width, height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from 'react-native-responsive';
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from '@ResponsiveDimensions';

export default MediaQueryStyleSheet.create(
	{
		container: {
			flex: 1,
			backgroundColor: Colors.yellow
		},
		scroll: {
			flexGrow: 1,
			padding: deviceWidth(3),
		},
		title: {
			color: Colors.Navy,
			fontWeight: '300',
			textAlign: 'center',
		},
		subtitle: {
			color: Colors.Navy,
			textAlign: 'center',
			marginTop: 2,
			fontWeight: '300'
		},
		cardtitle: {
			color: Colors.white,
			textAlign: 'center',
			marginHorizontal: deviceWidth(1.5)
		},
		cardView: {
			flexDirection: 'row',
			alignItems: 'center'
		},
		item: {
			backgroundColor: Colors.navy,
			marginBottom: deviceWidth(2)
		},
		item_content: {
			alignItems: 'center'
		},
		titleView: {
			marginBottom: deviceWidth(2)
		},
		title_content: {
			paddingVertical: deviceWidth(2)
		},
		icon: {
			width: deviceWidth(25),
			height: deviceHeight(15),
			resizeMode: 'contain',
			marginVertical: deviceWidth(2),
			tintColor: Colors.red
		},
		icon_wrap: {
			width: deviceWidth(25),
			justifyContent: 'center',
			alignItems: 'center'
		},
		smallIcon: {
			width: deviceWidth(6),
			height: deviceHeight(4),
			resizeMode: 'contain',
			tintColor: Colors.red
		},
	},
	{
		[MediaQueries.iPad]: {
			item: {
				width: '49%',
			},
			item_content: {
				justifyContent: 'space-between',
				paddingVertical: deviceWidth(2),
			}
		},
		[MediaQueries.iPhone]: {
			item: {
				width: '100%',
			},
			item_content: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				paddingVertical: deviceWidth(2)
			}
		}
	}
);
