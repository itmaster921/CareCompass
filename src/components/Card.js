/**
 * @providesModule @card
 */

import React from 'react';
import { TouchableOpacity, StyleSheet, View, } from "react-native";
import { deviceWidth } from "@ResponsiveDimensions";
import { Colors, Metrics } from '@theme';

export default (props) => {
    const {topbar, style, onPress, children, contentStyle, ...others} = props;

    var topbarStyle = topbar ? {
        height: topbar.height ? topbar.height : deviceWidth(1),
        backgroundColor: topbar.color ? topbar.color : Colors.red
    } : {
        height: 0
    }

    const Wrapper = onPress ? TouchableOpacity : View

    return(
        <Wrapper style={[styles.radius, style]} onPress={onPress} {...others}>
            <View style={topbarStyle}/>
            <View style={[styles.children, contentStyle]}>
                {children}
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    radius: {
        backgroundColor: '#fff',
        borderRadius: deviceWidth(1),
        overflow: 'hidden'
    },

    children: {
        // padding: deviceWidth(1),
    },

    topbar: {
        height: deviceWidth(1),
        backgroundColor: Colors.red
    }
});
