import React, {useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {AnswerBox} from '../AnswerBox';

// data type
// number |  0  1 2 3 4 5 6,... 0.15 
// string | "", "chuoi"
// array | [], index, array[index], array[index] = "b"
// Oject | {}, property, tat ca cac loai du lieu deu dc xem la property
// phep gan trong object 
// object = { age : 18, name: "ahihi"}
// Objet.name = "asd"
// any | no la cai j cung duoc


export const QuestionBox = ({
         color,
         question,
         ActualAnswer,
         actualAnswerSelect,
       }) => {
         const [trueIndex, setTrueIndex] = useState(null);
         // const [actuaAnswerSelect, setActuaAnswerSelect] = useState(null);

         return (
           <View style={s.Container}>
             <Text
               style={{
                 //flex: 1,
                 backgroundColor: color,
                 fontSize: 20,
                 justifyContent: 'center',
                 alignItems: 'stretch',
               }}>
               {question.Question}
             </Text>
             <AnswerBox
               color="green"
               trueIndex={ActualAnswer}
               // trueIndex={trueIndex}
               pressTouchable={i => actualAnswerSelect(i)}
               answers={question.Answers}
               //pressTouchable={setTrueIndex}
               trueAnswer={question.Answer}
             />
             <Text>{ActualAnswer}</Text>
           </View>
         );
       };
const s = StyleSheet.create({
 Container: {
    backgroundColor: 'white',
    fontSize: 20,
    width: '100%'
  },
});
