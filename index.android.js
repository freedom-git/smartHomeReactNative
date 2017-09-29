'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';

class HelloWorld extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Hello, World6</Text>
                <ScrollView contentContainerStyle = {styles.contentContainer}>
                    <Swiper style={styles.wrapper} showsButtons={true}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </ScrollView >
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        height:30,
    },
    contentContainer:{
        flex:1
    },
    wrapper: {
        height:100
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);