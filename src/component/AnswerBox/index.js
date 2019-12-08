import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const AnswerBox = ({
  color,
  answers,
  pressTouchable,
  trueIndex,
  trueAnswer,
}) => {
  //const pressTouchable = () => {};
  return (
    <View>
      {answers.map((e, i) => (
        <View
          key={i.toString()}
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'blue',
            marginLeft: 10,
            marginRight: 5,
            paddingLeft: 0,
            marginTop: 3,
            marginBottom: 3,
          }}>
          <TouchableOpacity onPress={() => pressTouchable(i)}>
            <Text

              style={
                trueIndex === i
                  ? trueIndex === trueAnswer
                    ? s.ActiveTrue
                    : s.ActiveFalse
                  : s.NoneActive
              }>
              {e}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const s = StyleSheet.create({
  NoneActive: {
    backgroundColor: 'white',
    fontSize: 20,
  },
  ActiveFalse: {
    backgroundColor: 'red',
    fontSize: 20,
  },
  ActiveTrue: {
    backgroundColor: 'green',
    fontSize: 20,
  },
});
