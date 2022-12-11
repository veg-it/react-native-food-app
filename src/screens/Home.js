import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#F8FBFF',
        padding: 8,
      }}>
      <View
        style={{
          width: '100%',
          marginLeft: 30,
          marginBottom: 50,
          marginTop: 40,
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 24,
            lineHeight: 31,
            color: '#3D3D3D',
          }}>
          Enjoy Delicious food
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginBottom: -200,
          marginHorizontal: -10,
          paddingLeft: 15,
        }}>
        <View
          style={{
            width: 82,
            height: 109,
            borderColor: '#F0CAC1',
            borderWidth: 1,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              width: 65,
              height: 87,
              backgroundColor: 'rgba(240, 204, 193, 0.1)',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 24,
                lineHeight: 31,
              }}>
              🍕
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
              }}>
              Pizza
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 82,
            height: 109,
            borderColor: '#F0CAC1',
            borderWidth: 1,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              width: 65,
              height: 87,
              backgroundColor: 'rgba(240, 204, 193, 0.1)',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 24,
                lineHeight: 31,
              }}>
              🍔
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
              }}>
              Burger
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 82,
            height: 109,
            borderColor: '#F0CAC1',
            borderWidth: 1,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              width: 65,
              height: 87,
              backgroundColor: 'rgba(240, 204, 193, 0.1)',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 24,
                lineHeight: 31,
              }}>
              🌭
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
              }}>
              Sausage
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 82,
            height: 109,
            borderColor: '#F0CAC1',
            borderWidth: 1,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              width: 65,
              height: 87,
              backgroundColor: 'rgba(240, 204, 193, 0.1)',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 24,
                lineHeight: 31,
              }}>
              🌮
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
              }}>
              Samosa
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 40,
          paddingHorizontal: 15,
        }}>
        <View>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 20,
              lineHeight: 24,
              letterSpacing: -0.03,
              color: '#3d3d3d',
            }}>
            Popular restaurants
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 18,
              color: '#FE554A',
              textDecorationLine: 'underline',
            }}>
            View all(29)
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: -100, marginHorizontal: -10, paddingLeft: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            backgroundColor: '#fff',
            height: 260,
            width: 200,
            borderRadius: 30,
            marginHorizontal: 15,
            elevation: 1,
            // box-shadow: 0px 20px 20.00px rgba(170, 170, 170, 0.05);
            shadowColor: 'rgb(170,170,170)',
            shadowOffset: {
              width: 0,
              height: 20,
            },
            shadowOpacity: 0.05,
            shadowRadius: 20.0,
            display: 'flex',
            alignItems: 'center',
            padding: 15,
          }}>
          <Image
            source={require('../images/burger.png')}
            style={{ height: 112, width: 170 }}
          />
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 21,
                color: '#3d3d3d',
                marginTop: 20,
                marginBottom: 5,
              }}>
              Big cheese burger
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
                color: '#3d3d3d',
              }}>
              No 10 opp lekki phase 1 bridge in sangotedo estate
            </Text>
            <View
              style={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 15, width: 15, marginRight: 4 }}
                />
                <Text>4+</Text>
              </View>
              <Image
                source={require('../images/heart.png')}
                style={{ height: 15, width: 15 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            backgroundColor: '#fff',
            height: 260,
            width: 200,
            borderRadius: 30,
            marginHorizontal: 15,
            elevation: 1,
            // box-shadow: 0px 20px 20.00px rgba(170, 170, 170, 0.05);
            shadowColor: 'rgb(170,170,170)',
            shadowOffset: {
              width: 0,
              height: 20,
            },
            shadowOpacity: 0.05,
            shadowRadius: 20.0,
            display: 'flex',
            alignItems: 'center',
            padding: 15,
          }}>
          <Image
            source={require('../images/burger.png')}
            style={{ height: 112, width: 170 }}
          />
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 21,
                color: '#3d3d3d',
                marginTop: 20,
                marginBottom: 5,
              }}>
              Big cheese burger
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
                color: '#3d3d3d',
              }}>
              No 10 opp lekki phase 1 bridge in sangotedo estate
            </Text>
            <View
              style={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 15, width: 15, marginRight: 4 }}
                />
                <Text>4+</Text>
              </View>
              <Image
                source={require('../images/heart.png')}
                style={{ height: 15, width: 15 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            backgroundColor: '#fff',
            height: 260,
            width: 200,
            borderRadius: 30,
            marginHorizontal: 15,
            elevation: 1,
            // box-shadow: 0px 20px 20.00px rgba(170, 170, 170, 0.05);
            shadowColor: 'rgb(170,170,170)',
            shadowOffset: {
              width: 0,
              height: 20,
            },
            shadowOpacity: 0.05,
            shadowRadius: 20.0,
            display: 'flex',
            alignItems: 'center',
            padding: 15,
          }}>
          <Image
            source={require('../images/burger.png')}
            style={{ height: 112, width: 170 }}
          />
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 21,
                color: '#3d3d3d',
                marginTop: 20,
                marginBottom: 5,
              }}>
              Big cheese burger
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
                color: '#3d3d3d',
              }}>
              No 10 opp lekki phase 1 bridge in sangotedo estate
            </Text>
            <View
              style={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 15, width: 15, marginRight: 4 }}
                />
                <Text>4+</Text>
              </View>
              <Image
                source={require('../images/heart.png')}
                style={{ height: 15, width: 15 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            backgroundColor: '#fff',
            height: 260,
            width: 200,
            borderRadius: 30,
            marginHorizontal: 15,
            elevation: 1,
            // box-shadow: 0px 20px 20.00px rgba(170, 170, 170, 0.05);
            shadowColor: 'rgb(170,170,170)',
            shadowOffset: {
              width: 0,
              height: 20,
            },
            shadowOpacity: 0.05,
            shadowRadius: 20.0,
            display: 'flex',
            alignItems: 'center',
            padding: 15,
          }}>
          <Image
            source={require('../images/burger.png')}
            style={{ height: 112, width: 170 }}
          />
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 21,
                color: '#3d3d3d',
                marginTop: 20,
                marginBottom: 5,
              }}>
              Big cheese burger
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
                color: '#3d3d3d',
              }}>
              No 10 opp lekki phase 1 bridge in sangotedo estate
            </Text>
            <View
              style={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 15, width: 15, marginRight: 4 }}
                />
                <Text>4+</Text>
              </View>
              <Image
                source={require('../images/heart.png')}
                style={{ height: 15, width: 15 }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Detail')}
          style={{
            backgroundColor: '#fff',
            height: 260,
            width: 200,
            borderRadius: 30,
            marginHorizontal: 15,
            elevation: 1,
            // box-shadow: 0px 20px 20.00px rgba(170, 170, 170, 0.05);
            shadowColor: 'rgb(170,170,170)',
            shadowOffset: {
              width: 0,
              height: 20,
            },
            shadowOpacity: 0.05,
            shadowRadius: 20.0,
            display: 'flex',
            alignItems: 'center',
            padding: 15,
          }}>
          <Image
            source={require('../images/burger.png')}
            style={{ height: 112, width: 170 }}
          />
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 21,
                color: '#3d3d3d',
                marginTop: 20,
                marginBottom: 5,
              }}>
              Big cheese burger
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                lineHeight: 18,
                color: '#3d3d3d',
              }}>
              No 10 opp lekki phase 1 bridge in sangotedo estate
            </Text>
            <View
              style={{
                marginTop: 15,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 15, width: 15, marginRight: 4 }}
                />
                <Text>4+</Text>
              </View>
              <Image
                source={require('../images/heart.png')}
                style={{ height: 15, width: 15 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
