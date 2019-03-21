/**
 * @providesModule @choice
 */

import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import {Colors, MediaQueries, FontSizes} from '@theme';
import Button from '@button'
import Text from '@text'
import { MediaQueryStyleSheet } from "react-native-responsive";
import { deviceWidth, deviceHeight } from "@ResponsiveDimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import Switch from "./Switch";

export default class Choice extends Component {
    state={
        switch: false,
    }
    
    render() {
        const {disabled, selected} = this.props

        var style = {}
        if(selected){
            style.backgroundColor = Colors.yellow
        }
        
        return (
            <View style={style}>
            {disabled?
                <View style={styles.container}>
                    <Text smallMedium style={styles.text}>{this.props.text}</Text>            
                </View>
                :
                <View style={styles.container}>
                    {selected && 
                        <Icon name={'check'} color={Colors.Navy} style={styles.icon} size={20}/>
                    }
                    <Text smallMedium style={styles.text}>{this.props.text}</Text>
                    <Switch
                        value={selected}
                        onValueChange={(val) => this.props.onPress(this.props.index)}
                        activeText={'YES'}
                        inActiveText={'NO'}
                        circleSize={deviceHeight(4)}
                        backgroundActive={Colors.green}
                        backgroundInactive={Colors.red}
                        activeTextStyle={{color: Colors.black, fontSize: FontSizes.smallMedium}}
                        inactiveTextStyle={{fontSize: FontSizes.smallMedium}}
                        circleBorderWidth={4}
                        circleActiveBorderColor={Colors.green}
                        circleInactiveBorderColor={Colors.red}
                        switchWidthMultiplier={2.25}
                        switchRightPx={4.5}
                        switchLeftPx={5}
                    />
                </View>
            }
            </View>    
        )
    }
}

const styles = MediaQueryStyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: deviceWidth(1),
        minHeight: FontSizes.smallMedium + deviceWidth(5),
    },

    icon: {
        marginRight: deviceWidth(1),
    },

    text: {
        flex: 1,
        color: Colors.navy,
    },

    button: {

    }
}, {
    [MediaQueries.iPhone] : {
        container: {
            padding: deviceWidth(1),
            minHeight: FontSizes.smallMedium + deviceWidth(7),
        }
    }
});