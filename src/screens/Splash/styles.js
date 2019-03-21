import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import { MediaQueries, Colors } from '@theme'
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowWidth } from "@ResponsiveDimensions";
import { FontSizes } from '../../theme';

export default MediaQueryStyleSheet.create({
    backgroundImage: {
        flex: 1,
        backgroundColor: Colors.yellow,
    },

    onboarding_image: {
        position: 'absolute',
        resizeMode: 'contain',
    },

    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
    },

    circle_above: {
        width: 500,
        height: 500,
        borderRadius: 250,
        borderColor: Colors.green,
        borderWidth: deviceWidth(1.5),
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        margin: deviceWidth(5),
    },

    dtt_logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },

    center_view: {
        alignItems: 'center',
    },

    app_name: {
        color: Colors.navy,
        fontSize: 40,
        margin: deviceWidth(1),
    },

    spinner: {
        marginVertical: 20,
    },

    text_desc: {
        color: Colors.navy,
        fontSize: 27,
        textAlign: 'center',
        margin: deviceWidth(1),
    },

    text_website: {
        color: '#fff',
        fontSize: FontSizes.medium,
        fontWeight: 'bold',
        textAlign: 'center',
    }
}, {
    [MediaQueries.iPhone] : {
        scrollView: {
            justifyContent: 'center',
        },
        onboarding_image: {
            height: deviceHeight(50.6),
            width: '100%'
        }
    },
})