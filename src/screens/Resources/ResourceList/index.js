import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    ScrollView,
    AsyncStorage,
    ImageBackground,
    Dimensions,
} from 'react-native';

import Styles from './styles';
import Text from '@text'
import Footer from '@footer'
import { Loader, Card } from '@components';
import { getResources,updateTimeInterval } from "@api";
import moment from 'moment'
import {Colors, Images, FontSizes} from '@theme';
import { MediaQuery } from "react-native-responsive";
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from "@ResponsiveDimensions";

export default class Resources extends Component {
    constructor(props) {
        super(props);
        Props=this.props;
        this.state = ({
            resourceIndexes: [],
            loaderVisible: false,
            isVisibleArtwork: false,
        })
    }

    async componentDidMount() {

        var json = await getResources(true)
        if(!json){
            this.setState({loaderVisible: true})
            json = await getResources(false)
            this.setState({loaderVisible: false})
        }
        const resources = json.resources
        console.log(resources);

        var resourceIndexes = [];
        for(var i = 0; i < resources.length; i ++){
            resourceIndexes.push(resources[i]);
        }
        this.setState({resourceIndexes})

    }

    renderResourceItem({item, index}){
        const {navigate} = this.props.navigation
        return (
            <Card style={Styles.cardView} onPress={()=>{navigate("ResourceDetail", {resourceIndex: index})}}>
                <Text smallmedium center bold light>{item.title}</Text>
            </Card>
        )
    }

    render() {
        return (

            <View style={Styles.container} >

                <ScrollView contentContainerStyle={Styles.scroll}>
                    <View 
						onLayout = {(e)=>{
							let {height: contentHeight} = e.nativeEvent.layout;
							let { height } = Dimensions.get('window');
                            let imageHeight = deviceWidth(50 * 303 / 388);
							this.setState({isVisibleArtwork: (height - contentHeight - 144 > imageHeight)});
						}}
					>

                        <Loader loading={this.state.loaderVisible}/>
                        <Card topbar={{color: Colors.navy}} style={Styles.titleView}>
                            <Text large center color={Colors.navy} style={Styles.title}>Resource library</Text>
                            <Text medium center style={Styles.subtitle} color={Colors.navy}>
                                Extra information and resources.
                            </Text>
                        </Card>

                        <MediaQuery minDeviceWidth={768}>
                            <FlatList
                                numColumns = {2}
                                columnWrapperStyle = {{justifyContent:'center'}}
                                data = {this.state.resourceIndexes}
                                renderItem = {this.renderResourceItem.bind(this)}
                                keyExtractor={item => item.title}
                            />
                        </MediaQuery>

                        <MediaQuery maxDeviceWidth={767}>
                            <FlatList
                                numColumns = {1}
                                data = {this.state.resourceIndexes}
                                renderItem = {this.renderResourceItem.bind(this)}
                                keyExtractor={item => item.title}
                            />
                        </MediaQuery>
                    </View>
                </ScrollView>
                {this.state.isVisibleArtwork &&
                    <Image
                        source={Images.image_resource_library}
                        style={{
                            zIndex: -1,
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: deviceWidth(50),
                            height: deviceWidth(50 * 404 / 388),
                            resizeMode: 'contain'
                        }}
                    />
                }
            </View>
        );
    }
}