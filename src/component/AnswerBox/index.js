import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const AnswerBox = ({
  color,
  answers,
  pressTouchable,
  trueIndex,
  trueAnswer,
}) => {
  //const pressTouchable = () => {};
  return (
    <View style = {{borderWidth:5, borderColor:'brown'}}>
      {answers.map((e, i) => (
        <TouchableOpacity onPress={() => pressTouchable(i)}>
          <Text
            key={i.toString}
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
      ))}
<Text>{trueIndex}</Text>
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
