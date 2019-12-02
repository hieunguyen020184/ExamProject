import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
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
      '5. fghjkfghgfh',
      '6. fghjklcdfgfh  fghgfh',
      '7.dfghjfghgfh',
      '8. fghjkfghgfh',
      '9. fghjklcdfgfh  fghgfh',
    ],
    Answer: 0,
  },
];

export const Home = () => {
  const [index, setIndex] = useState(0);
  const [indexChoose, setIndexChoose] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [score, setScore] = useState(0);

  const [actualAnswer, setActualAnswer] = useState([]);

  // const totalScore = () => {
  //  {actualAnswer.map((e, i) => (
  //    {
    
  //         // {  key={i.toString}
  //           e = Questions[i].Answer? setScore(score++): setScore(score++)}

  //  ))
  // };

  const pressTouchable = () => {
    // setIndexChoose(True)
    let m = index;
    m = m + 1;
    if (m < Questions.length) {
      setIndex(m);
    } else {
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
  return (
    <View style={s.flex}>
      <QuestionBox
        actualAnswerSelect={i => onAnswerArray(i)}
        color="grey"
        question={Questions[index]}
        ActualAnswer={actualAnswer[index]}
      />
      <TouchableOpacity onPress={pressTouchable}>
       { <Text> {!(index === Questions.length - 1) ? 'NEXT' : 'DONE'} </Text>}
      </TouchableOpacity>

      {
        // toan tu 3 ngoi
        // điềukiện ? đúngthìlàm : khôngđúngthìlàm
        // điềukiện && đúngmớilàm
      }
      {index > 0 && (
        <TouchableOpacity onPress={pressBackTouchable}>
          <Text> BACK</Text>
        </TouchableOpacity>
      )}
      
      <Text>{actualAnswer}</Text>
      {isDone && <Text > YOUR SCORE: {score} </Text> }
    </View>
  );
};
const s = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'blue',
    //justifyContent: 'center',
    alignItems: 'center',
  },
});
