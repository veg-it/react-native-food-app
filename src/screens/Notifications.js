import React from 'react';
import {View, Text} from 'react-native'
import Constants from 'expo-constants';

const Notifications = () => {
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: Constants.statusBarHeight,
            backgroundColor: '#F8FBFF',
            padding: 8,
        }}>
            <Text>Notifications</Text>
        </View>
    )
}

export default Notifications;