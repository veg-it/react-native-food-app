import React, { useState } from 'react';
import Constants from 'expo-constants';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const Detail = ({ navigation }) => {
  const [count, setCount] = useState(1);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1, backgroundColor: '#F8FBFF' }}
        scrollEnabled={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: Constants.statusBarHeight,

            padding: 8,
          }}>
          <View style={{ marginTop: 30, width: '100%', paddingHorizontal: 15 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 40,
                height: 40,
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 18 }}>{'<'}</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View
              style={{
                width: 260,
                height: 225,
                backgroundColor: '#fff',
                borderRadius: 20,
                marginTop: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/burger.png')}
                style={{ width: 230, height: 150, marginBottom: 40 }}
              />
            </View>
          </View>

          <View
            style={{
              width: 100,
              height: 50,
              backgroundColor: '#F9881F',
              borderRadius: 30,
              marginTop: 35,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 18,
            }}>
            <TouchableOpacity
              onPress={() =>
                count > 0 ? setCount(count - 1) : setCount(count)
              }>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 21,
                  color: '#fff',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 14,
                lineHeight: 21,
                color: '#fff',
              }}>
              {count}
            </Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 21,
                  color: '#fff',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 35 }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 24,
                lineHeight: 31,
                color: '#3d3d3d',
              }}>
              Big boys Cheese burger
            </Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 30,
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 15, width: 15, marginRight: 5 }}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 11,
                    lineHeight: 16,
                  }}>
                  4+
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 30,
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 18,
                    marginRight: 5,
                  }}>
                  🔥
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 11,
                    lineHeight: 16,
                  }}>
                  300cal
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 15,
                    lineHeight: 18,
                    marginRight: 5,
                  }}>
                  ⏰
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 11,
                    lineHeight: 16,
                  }}>
                  5-10min
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 35, marginHorizontal: 15 }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 21,
                color: '#3d3d3d',
              }}>
              Our simple, classic cheeseburger begins with a 100% pure beef
              burger seasoned with just a pinch of salt and pepper. The
              McDonald’s Cheeseburger is topped
            </Text>
          </View>

          <View style={{ marginTop: 35, width: '100%', paddingHorizontal: 15 }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 21,
                color: '#3d3d3d',
              }}>
              Toppings for you
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              paddingTop: 20,
              marginHorizontal: -10,
              paddingLeft: 15,
              paddingBottom: 50,
              marginBottom: 50,
            }}>
            <View
              style={{
                width: 130,
                height: 50,
                borderRadius: 30,
                marginRight: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                //drop-shadow(0px 20px 40px rgba(2, 32, 44, 0.05));
                elevation: 1,
                shadowColor: 'rgb(2,32,44)',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.05,
                shadowRadius: 20.0,
              }}>
              <View
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                  elevation: 1,
                  shadowColor: 'rgb(0,0,0)',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowRadius: 10.0,
                  shadowOpacity: 0.1,
                  marginRight: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 20, width: 20 }}
                />
              </View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 12,
                  lineHeight: 18,
                }}>
                Cheese
              </Text>
            </View>

            <View
              style={{
                width: 130,
                height: 50,
                borderRadius: 30,
                marginRight: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                //drop-shadow(0px 20px 40px rgba(2, 32, 44, 0.05));
                elevation: 1,
                shadowColor: 'rgb(2,32,44)',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.05,
                shadowRadius: 20.0,
              }}>
              <View
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                  elevation: 1,
                  shadowColor: 'rgb(0,0,0)',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowRadius: 10.0,
                  shadowOpacity: 0.1,
                  marginRight: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 20, width: 20 }}
                />
              </View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 12,
                  lineHeight: 18,
                }}>
                Cheese
              </Text>
            </View>

            <View
              style={{
                width: 130,
                height: 50,
                borderRadius: 30,
                marginRight: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                //drop-shadow(0px 20px 40px rgba(2, 32, 44, 0.05));
                elevation: 1,
                shadowColor: 'rgb(2,32,44)',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.05,
                shadowRadius: 20.0,
              }}>
              <View
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                  elevation: 1,
                  shadowColor: 'rgb(0,0,0)',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowRadius: 10.0,
                  shadowOpacity: 0.1,
                  marginRight: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/star.png')}
                  style={{ height: 20, width: 20 }}
                />
              </View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 12,
                  lineHeight: 18,
                }}>
                Cheese
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 30,
          width: '100%',
          paddingHorizontal: 20,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#F9881F',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            //0px 10px 30px rgba(202, 66, 17, 0.1);
            elevation: 1,
            shadowColor: 'rgb(202,66,17)',
            shadowRadius: 30.00,
            shadowOpacity: 0.1,
            shadowOffset: {
              width: 0,
              height: 10 
            }
          }}>
          <Text style={{
            fontWeight: '700',
            fontSize: 14,
            lineHeight: 21,
            color: '#fff'
          }}>Add to cart</Text>
        </View>
      </View>

    </View>
  );
};

export default Detail;
