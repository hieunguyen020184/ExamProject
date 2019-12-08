import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { QuestionBox } from '../../component/QuestionBox';
import { AnswerBox } from '../../component/AnswerBox';

// const Questions = [
//   {
//     Question: 'Q_1. 11111/',
//     Answers: [
//       '1.dfghjfghgfh',
//       '2. fghjkfghgfh',
//       '3. fghjklcdfgfh  fghgfh',
//       '4.gg ghtyjj fghgfh',
//       '5. refre vdfgtr fghgfh',
//     ],
//     Answer: 1,
//     Explain:
//       '11111111111111111111111111111111111111111111111111111111111111111',
//   },
//   {
//     Question: 'Q_2. ysadfghjk,kj.k/',
//     Answers: [
//       '1.dfghjfghgfh',
//       '2. fghjkfghgfh',
//       '3. fghjklcdfgfh  fghgfh',
//       '4.gg ghtyjj fghgfh',
//       '5. refre vdfgtr fghgfh',
//     ],
//     Answer: 2,
//     Explain:
//       '22222222222222222222222222222222222222222222222222222222222222222222',
//   },
//   {
//     Question: 'Q_3. ysadfghjk,kj.k/',
//     Answers: [
//       '1.dfghjfghgfh',
//       '2. fghjkfghgfh',
//       '3. fghjklcdfgfh  fghgfh',
//       '4.gg ghtyjj fghgfh',
//       '5. refre vdfgtr fghgfh',
//     ],
//     Answer: 3,
//     Explain:
//       '3333333333333333333333333333333333333333333333333333333333333333333333333',
//   },
//   {
//     Question: 'Q_4. ysadfghjk,kj.k/',
//     Answers: ['1.dfghjfghgfh', '2. fghjkfghgfh', '3. fghjklcdfgfh  fghgfh'],
//     Answer: 0,
//     Explain:
//       '44444444444444444444444444444444444444444444444444444444444444444444444444',
//   },
//   {
//     Question: 'Q_5. ysadfghjk,kj.k/',
//     Answers: [
//       '1.dfghjfghgfh',
//       '2. fghjkfghgfh',
//       '3. fghjklcdfgfh  fghgfh',
//       '4.dfghjfghgfh',
//     ],
//     Answer: 0,
//     Explain:
//       '5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555',
//   },
// ];

export const Home = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [Questions, setQuestionList] = useState([]);
  const [indexChoose, setIndexChoose] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [score, setScore] = useState(0);

  const [actualAnswer, setActualAnswer] = useState([]);
  const Exp = '';
  const url = 'http://vuongpshtdemoasm.herokuapp.com/question';
  useEffect(() => {
    getApi().then(() => { });
    return (() => {
    })
  }, []);
  const getApi = async () => {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
    setQuestionList(result)
  };
  // const totalScore = () => {
  //   setScore(0);
  //   let m = 0;
  //   for (let i = 0; i < Questions.length; i++) {
  //     if (actualAnswer[i] === Questions[i].Answer) {
  //       m = m + 1;
  //       setScore(m);
  //     } else {
  //     }
  //   }
  // };
  const totalScore = () => {
    setScore(0);
    let m = 0;
    for (let i = 0; i < Questions.length; i++) {
      if (actualAnswer[i] === Questions[i].Answer) {
        m = m + 1;
        setScore(m);
      } else {
      }
    }
  };

  const pressTouchable = () => {
    // setIndexChoose(True)
    let m = index;
    m = m + 1;
    if (m < Questions.length) {
      setIndex(m);
    } else {
      totalScore();
      setIsDone(true);
    }
    // setActualAnswer(AnswerArray)
  };
  const pressBackTouchable = () => {
    let m = index;
    m = m - 1;
    setIsDone(false);
    setIndex(m);
  };
  const onAnswerArray = i => {
    const preArr = actualAnswer;
    preArr[index] = i;

    //  ... nghia la tao 1 mang moi voi gia tri nhu mang cu
    setActualAnswer([...preArr]);
  };
  //let Q = Questions[0];
  let colorrr = 255;
  return (
    <View style={s.flex}>
      <ImageBackground
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={{
          uri:
            'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: `rgba(155, 0, ${colorrr}, 0.7)`,
          }}></View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingTop: 20,
          alignItems: 'stretch',
          position: 'absolute',
        }}>
        {Questions.length > 0 && (
          <QuestionBox
            actualAnswerSelect={i => onAnswerArray(i)}
            color="pink"
            question={Questions[index]}
            ActualAnswer={actualAnswer[index]}
          />
        )}
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            width: 100,
            height: 40,
            backgroundColor: 'brown',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 20,
          }}
          onPress={pressTouchable}>
          {<Text>{!(index === Questions.length - 1) ? 'NEXT' : 'DONE'}</Text>}
        </TouchableOpacity>

        {
          // toan tu 3 ngoi
          // điềukiện ? đúngthìlàm : khôngđúngthìlàm
          // điềukiện && đúngmớilàm
        }
        {index > 0 && (
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: 100,
              height: 40,
              backgroundColor: 'brown',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 20,
            }}
            onPress={pressBackTouchable}>
            <Text> BACK</Text>
          </TouchableOpacity>
        )}
        {isDone && (
          <Text
            style={{
              alignSelf: 'center',
              backgroundColor: 'brown',
              //justifyContent: 'center',
              borderColor: 'red',
              borderRadius: 20,
              padding: 10,
            }}>
            YOUR SCORE: {score}
          </Text>
        )}
        <Text>{actualAnswer}</Text>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            width: 100,
            height: 40,
            backgroundColor: 'brown',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 20,
          }}
          onPress={() => navigation.navigate('Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <ScrollView
          style={{
            backgroundColor: 'white',
            borderColor: 'blue',
            borderRadius: 10,
            borderWidth: 3,
            padding: 10,
            margin: 10,
          }}>
          <Text>
            {actualAnswer[index] || actualAnswer[index] == 0 ? (
              <Text>{Questions[index].Explain} </Text>
            ) : (
                <Text>'' </Text>
              )}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
const s = StyleSheet.create({
  flex: {
    flex: 1,
    // backgroundColor: 'blue',
    //justifyContent: 'center',
    alignItems: 'center',
  },
});
