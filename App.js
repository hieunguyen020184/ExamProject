/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Button,
} from 'react-native';
import {Home} from './src/screen/Home/Home';
import {RootStack} from './src/navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

// test change on git
export const App = () => {
  const [isRun, setIsRun] = useState(false);
  const anim = new Animated.Value(0);

  const animm = Animated.timing(anim, {
    toValue: 1,
    duration: 500,
  });
  const animmOut = Animated.timing(anim, {
    toValue: 0,
    duration: 500,
  });

  const _onPressBigButton = (cbt, cbf) => {
    if (isRun) {
      cbt
    } else {
      cbf
    }
    setIsRun(!isRun);
  };
  return (
    <>
      <RootStack />
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: 'white',
        }}>
        <Button
          title="click me"
          onPress={() =>
            _onPressBigButton(
              animmOut.start(),
              animm.start(),
            )
          }
        />
        <Animated.View
          style={{
            transform: [
              {
                rotateZ: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '45deg'],
                }),
              },
            ],
            width: 90,
            height: 90,
            borderRadius: 45,
            backgroundColor: 'blue',
            position: 'absolute',
            bottom: 25,
            shadowColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.9,
            shadowRadius: 5,

            elevation: 20,
          }}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 50,
                color: 'white',
              }}>
              +
            </Text>
          </View>
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
