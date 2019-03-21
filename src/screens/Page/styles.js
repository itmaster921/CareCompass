import React, { Component } from 'react';
import { Text, Platform, StyleSheet, Dimensions } from 'react-native';
import { Colors, MediaQueries, FontSizes } from '@theme';

const { width, height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from 'react-native-responsive';
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from '@ResponsiveDimensions';

export default MediaQueryStyleSheet.create(
	{
		container: {
			flex: 1, 
			backgroundColor: Colors.yellow,
		},
		scroll:{
			flexGrow: 1,
			padding: deviceWidth(3),
		},
		title: {
			color: Colors.Navy,
			fontWeight: '300',
			margin: deviceWidth(1),
		},
		subtitle: {
			color: Colors.textSecondary,
			textAlign: 'left',
			marginVertical: width / 50
		},
		middleimage: {
			height: height / 5,
			width: width / 4.5,
			alignSelf: 'center'
		},
		titleView: {
			marginBottom: deviceWidth(2), 
		},
		buttonBar: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		buttonBack: {
			height: height / 22,
			width: width / 6,
			paddingHorizontal: width / 90
		},
		itemView: {
			// flex: 1,
		},
		featuredImage: {
			width: '100%',
			flexDirection: 'row',
			marginBottom: deviceWidth(6),
			justifyContent: 'center'
		}
	},
	{
		[MediaQueries.iPhone]: {

		}
	}
);
