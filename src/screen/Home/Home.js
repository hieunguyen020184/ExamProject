import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {QuestionBox} from '../../component/QuestionBox';
import {AnswerBox} from '../../component/AnswerBox';
// answer = []
// day props asnwerbox => questionbox => home => index
// index cua mang answer
// answer la 1 property trong question
// indexQuestion cua mang question
// indexQuestion = 0
// index = 1
// gan index vo vi tri indexQuestion trong mang AnswerArray
// CACH GAN
// AnswerArray[indexQuestion] = index
const Questions = [
  {
    Question: 'Q_1. 11111/',
    Answers: [
      '1.dfghjfghgfh',
      '2. fghjkfghgfh',
      '3. fghjklcdfgfh  fghgfh',
      '4.gg ghtyjj fghgfh',
      '5. refre vdfgtr fghgfh',
    ],
    Answer: 1,
  },
  {
    Question: 'Q_2. ysadfghjk,kj.k/',
    Answers: [
      '1.dfghjfghgfh',
      '2. fghjkfghgfh',
      '3. fghjklcdfgfh  fghgfh',
      '4.gg ghtyjj fghgfh',
      '5. refre vdfgtr fghgfh',
    ],
    Answer: 2,
  },
  {
    Question: 'Q_3. ysadfghjk,kj.k/',
    Answers: [
      '1.dfghjfghgfh',
      '2. fghjkfghgfh',
      '3. fghjklcdfgfh  fghgfh',
      '4.gg ghtyjj fghgfh',
      '5. refre vdfgtr fghgfh',
    ],
    Answer: 3,
  },
  {
    Question: 'Q_4. ysadfghjk,kj.k/',
    Answers: ['1.dfghjfghgfh', '2. fghjkfghgfh', '3. fghjklcdfgfh  fghgfh'],
    Answer: 0,
  },
  {
    Question: 'Q_5. ysadfghjk,kj.k/',
    Answers: [
      '1.dfghjfghgfh',
      '2. fghjkfghgfh',
      '3. fghjklcdfgfh  fghgfh',
      '4.dfghjfghgfh',
    ],
    Answer: 0,
  },
];

export const Home = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [indexChoose, setIndexChoose] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [score, setScore] = useState(0);

  const [actualAnswer, setActualAnswer] = useState([]);

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
  console.log('score', score);
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

        <QuestionBox
          actualAnswerSelect={i => onAnswerArray(i)}
          color="pink"
          question={Questions[index]}
          ActualAnswer={actualAnswer[index]}
        />
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
