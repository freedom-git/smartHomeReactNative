'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    Alert
} from 'react-native';
import Swiper from 'react-native-swiper';

function HotAppartmentLine(props) {
    const listArr = props.data;
    const listItem = listArr.map((item) => {
        return (
            <View style={styles.hotAppartmentItem} key={item}>
                <Text style={styles.hotAppartmentItemText}>{item}</Text>
            </View>
        );
    });
    return (
        <View style={styles.hotAppartmentLine}>
            {listItem}
        </View>
    );
}

function HotAppartment(props) {
    const listArr = props.data;
    const newArr = [];
    const temArr = [];
    listArr.forEach(function (item) {
        temArr.push(item);
        if (temArr.length >= 3) {
            newArr.push(temArr.slice(0));
            temArr.length = 0;
        }
    });
    if (temArr.length != 0) {
        newArr.push(temArr.slice(0));
        temArr.length = 0;
    }
    const listItem = newArr.map((item) => {
        return (
            <HotAppartmentLine key={item[0]} style={styles.hotAppartmentLine} data={item}></HotAppartmentLine>
        );
    });
    return (
        <View style={styles.hotAppartment}>
            {listItem}
        </View>
    );
}

function HerrizenScroll(props) {
    const listArr = props.data.data;
    const listItem = listArr.map((item) => {
        return (
            <View style={styles['herrizenScrollItem' + props.data.mark]} key={item}>
                <Text style={styles['herrizenScrollItemText' + props.data.mark]}>{item}</Text>
            </View>
        );
    });
    return (
        <View style={styles['herrizenScroll' + props.data.mark]}>
            <Text style={styles['herrizenScrollText' + props.data.mark]}>{props.data.name}</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles['HerrizenScrollContent' + props.data.mark]} showsHorizontalScrollIndicator={false}>
                {listItem}
            </ScrollView>
        </View>
    );
}


function ApartmentList(props) {
    const listArr = props.data;
    return (
        <View style={styles.ApartmentList}>
            <Text style={styles.ApartmentListText}>热门品牌公寓</Text>
            <FlatList
                data={listArr}
                keyExtractor={(item, index) => item}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.ApartmentListItem}>
                            <Text style={styles.ApartmentListItemText}>{item}</Text>
                        </View>
                    )
                }}
            />
            <Text style={styles.ApartmentListUpdateText}>上拉加载更多</Text>
        </View>
    );
}

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotAppartment: [1, 2, 3, 4, 5, 6],
            monthPay: { name: '按月付租，生活无忧', data: [1, 2, 3, 4, 5, 6], mark: '_monthPay' },
            centralize: { name: '集中式公寓', data: [1, 2, 3, 4, 5, 6], mark: '_centralize' },
            apartmentList: [1, 2, 3, 4, 5, 6]
        };
    }
    isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };
    pullUpUpdate() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>品牌馆</Text>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                    onScroll={({ nativeEvent }) => {
                        if (this.isCloseToBottom(nativeEvent)) {
                            this.pullUpUpdate();
                        }
                    }}
                    scrollEventThrottle={400}
                >
                    <Swiper style={styles.swiper} showsButtons={true}>
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
                    <HotAppartment data={this.state.hotAppartment}></HotAppartment>
                    <HerrizenScroll data={this.state.monthPay}></HerrizenScroll>
                    <HerrizenScroll data={this.state.centralize}></HerrizenScroll>
                    <ApartmentList data={this.state.apartmentList}></ApartmentList>
                </ScrollView >
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f6f6f6',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    contentContainer: {
        // flex: 1
    },
    swiper: {
        height: 200
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
    },
    hotAppartment: {
        paddingTop: 30,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    hotAppartmentLine: {
        width: 380,
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    hotAppartmentItem: {
        width: 120,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
    herrizenScroll_monthPay: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    herrizenScrollText_monthPay: {
        fontSize: 20,
        padding: 20,
        color: '#000'
    },
    HerrizenScrollContent_monthPay: {
        paddingLeft: 18,
        paddingBottom: 35,
    },
    herrizenScrollItem_monthPay: {
        width: 84,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        marginRight: 10,
    },
    herrizenScroll_centralize: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    herrizenScrollText_centralize: {
        fontSize: 20,
        padding: 20,
        color: '#000'
    },
    HerrizenScrollContent_centralize: {
        paddingLeft: 18,
        paddingBottom: 35,
    },
    herrizenScrollItem_centralize: {
        width: 140,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        marginRight: 10,
    },
    ApartmentList: {
        backgroundColor: '#fff',
        marginTop: 10,
        alignItems: 'center'
    },
    ApartmentListText: {
        width: 380,
        fontSize: 20,
        padding: 20,
        paddingLeft: 0,
        color: '#000',
        textAlign: 'left',
    },
    ApartmentListItem: {
        height: 112,
        backgroundColor: '#ccc',
        marginBottom: 10,
        width: 380,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ApartmentListUpdateText: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        paddingBottom:20,
    }

});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);