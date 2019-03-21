import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries} from '@theme';

const { width,height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";
import { FontSizes } from '@theme';


export default MediaQueryStyleSheet.create({

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
        textAlign: 'center',
    },
    subtitle: {
        color: Colors.navy,
        textAlign: 'center',
        marginTop:2,
        fontWeight: '300'
    },
    viewImage:{
        alignItems: 'center',
        marginVertical: height/30,
    },
    middleimage: {
        height:height/3,
        width:width/1.5
    },
    viewBody:{
        alignItems: 'center'
    },
    faqItem: {
        marginVertical: deviceWidth(2),
    },
    itemTitle: {
        padding: 16,
        flexDirection: 'row',
        backgroundColor: Colors.backgroundSecondary,
    },
    txtQuestion: {
        fontSize: width/30,
    },
    txtAnswer: {
        fontSize: width/30,
        padding : 16, 
        borderWidth: 1.5,
        borderColor: Colors.backgroundSecondary,
    },
    faqView: {
        flex: 1,
        marginHorizontal : deviceWidth(2),
    },
    flatList: {
    },
    imageView:{
        width: width,
        height: height-responsiveHeight(15), 
    },
    titleView: {
        marginBottom: deviceWidth(2),
    },
    title_content: {
        paddingVertical: deviceWidth(2),
    },
    body: {
    },
    body_content: {
        flex: 1,
        alignItems: 'center',
        padding: deviceWidth(3),
    },
    faqItemQuestion: {
        fontSize: FontSizes.smallMedium * 1.1
    },
    buttonBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
},
{
    [MediaQueries.iPad] : {
    },
    [MediaQueries.iPhone] : {
    }
});
