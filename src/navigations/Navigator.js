import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Favourite from '../screens/Favourite';
import Cart from '../screens/Cart';
import Notifications from '../screens/Notifications';
import Search from '../screens/Search';
import { Image, View } from 'react-native';

const Tab = createBottomTabNavigator();
const screenOptionsStyle = {
  headerShown: false,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          position: 'absolute',
          height: 75,
        },
        tabBarLabelStyle:{paddingBottom:3},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/home.png')}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/heart.png')}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: '#F9881F',
                borderRadius: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 30,
                elevation: 1,
                //box-shadow: 0px 8px 15px rgba(150, 110, 86, 0.2);
                shadowColor: 'rgb(150,110,86)',
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.2,
                shadowRadius: 15.0,
              }}>
              <Image
                source={require('../images/search.png')}
                style={{ height: 24, width: 24 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/notifications.png')}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/cart.png')}
              style={{ height: 24, width: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionsStyle}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
