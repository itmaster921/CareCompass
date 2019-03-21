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


export default MediaQueryStyleSheet.create({

    container: {
       flex: 1, 
       backgroundColor: Colors.yellow,
    },
    scroll: {
        alignSelf: 'center',
        padding: deviceWidth(3),
    },
    title: {
        color: Colors.navy,
        fontWeight: "300",
    },
    subtitle: {
        color: Colors.textSecondary,
        textAlign: 'center',
        marginTop:deviceWidth(2),
    },
    middleimage: {
        height:deviceHeight(35),
        width:deviceWidth(60)
    },
    titleView: {
        marginBottom: deviceWidth(2),
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemView: {
        flex:1,
    },
}, 
{
    [MediaQueries.iPhone] : {

    }
});
