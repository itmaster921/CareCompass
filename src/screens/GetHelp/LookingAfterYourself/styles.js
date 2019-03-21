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
    scroll:{
        flexGrow: 1,
        padding: deviceWidth(2),
    },
    title: {
        color: Colors.Navy,
        fontWeight: "300",
    },
    subtitle: {
        color: Colors.textSecondary,
        textAlign: 'left',
        marginVertical:width/50,
    },
    middleimage: {
        height:height/5,
        width:width/4.5,
        alignSelf: 'center',
    },
    titleView: {
        marginBottom: deviceWidth(2), 
    },
    buttonBar: {
        backgroundColor:Colors.Sand,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: deviceWidth(1),
        paddingHorizontal: deviceWidth(10),
        alignItems: 'center',
    },
    buttonBack:{
        height:height/22,
        width:width/6,
        paddingHorizontal:width/90
    },
    itemView: {
        flex:1,
        backgroundColor: Colors.backgroundPrimary,
        borderRadius: deviceWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: deviceWidth(1.2), height: deviceWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        paddingHorizontal:deviceWidth(5),
        paddingVertical:deviceWidth(3),
        marginBottom : width/35, 
        justifyContent: 'center',
        // alignItems: 'center',
    },
},
{
    [MediaQueries.iPhone] : {
    }
});
