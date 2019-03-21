import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Linking,
    ScrollView,
    Share,
    FlatList,
    Dimensions,
    WebView,
    ImageBackground
} from 'react-native';

import Styles from './styles';
import Footer from '@footer'
import {Colors, Images, FontSizes, htmlStyles} from '@theme';
import {Button, Card, Text} from '@components'
import { getUserGuides, API_HTML_ROOT } from "@api";
import HTMLView from 'react-native-htmlview';
const { width,height } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import {SharedModal} from '../../modals';
import HTML from 'react-native-render-html';
import {exportHelpPdf} from '@helppdf';
import {navigateToUrl} from 'router';

export default class UserGuidesDetail extends Component {
    constructor(props) {
        super(props);
        const {userguide} = this.props.navigation.state.params

        let title = userguide.title;
        let body = userguide.body;
        let faqs = userguide.faqs;
        let image = userguide.featured_image ? API_HTML_ROOT + userguide.featured_image.url : '';

        this.state = ({
            userguide: userguide,
            title,
            image,
            body,
            faqs,
            loaderVisible: true,
        })
    }

    closeModal(){
        this.setState({
            modalVisible: false
        })
    }

    renderFAQItem = ({item, index}) => {
        return (
            <View style={Styles.faqItem}>
                <Text bold color={Colors.red} style={Styles.faqItemQuestion}>{index + 1}. {item.question} </Text>
                <Text>{item.answer} </Text>
            </View>
        )
    }

	exportPage = async () => {
		await exportHelpPdf(this.state.title, this.state.body, this.state.faqs)
    }
    
    render() {

        return (
            <View style={Styles.container} >

                <ScrollView contentContainerStyle={Styles.scroll}>

                    <Card topbar={{color: Colors.Navy}} style={Styles.titleView} contentStyle={Styles.title_content} >
                        <Text large style={Styles.title}>Using the app</Text>
                        <Text medium style={Styles.subtitle}>{this.state.title}</Text>
                    </Card>

                    <Card style={Styles.body} contentStyle={Styles.body_content}>
                        <View style={Styles.viewBody}>
                            <HTML 
                                html={this.state.body} 
                                tagsStyles={htmlStyles} 
                                onLinkPress={(e, url) => navigateToUrl(url, this.props.navigation)}             
                            />
                        </View>

                        {this.state.image &&
                            <View style={Styles.viewImage}>
                                <Image style={[Styles.middleimage]} source={{uri: this.state.image}} resizeMode='stretch'/>
                            </View>
                        }

                        {this.state.faqs.length > 0 &&
                            <FlatList
                                data = {this.state.faqs}
                                renderItem = {this.renderFAQItem}
                                keyExtractor = {(item, index) => index.toString()}
                                style={Styles.flatList}
                            />
                        }
                        <View style={Styles.buttonBar}>
                            <Button 
                                light 
                                bold 
                                buttonStyles={{
                                    margin: 0,
                                }}
                                onPress={ ()=> this.props.navigation.goBack() } 
                            >
                                Go back
                            </Button>
                            <Button
                                bold
                                light
                                onPress={this.exportPage}
                            >
                                Export
                            </Button>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}
