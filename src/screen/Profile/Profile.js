import React, {useState, useEffect} from 'react';
import {
  View,
  ViewScroll,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  TextInput,
  ScrollView,
  navigationOptions,
} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {imagesList} from '../../variable';
import {CusIcon} from '../../component/CusIcon';
import { CusHeader } from '../../component/CusHeader';

const list = [
  '1. Welding1',
  '2.Inspector',
  '3. CWi',
  '4.ASME B31.1',
  '5.ASME B31.3',
  '6.AWS D1.1',
  '7. API 510',
  '8. API 570',
  '9. API 580',
  '10. API 1104',
  '11. ASTM',
  '12. ASNT',
  '13. NDT',
  '14. Supervisor',
  '15. Welder',
];
//navi ... pros

const {width, height} = Dimensions.get('window');
export const Profile = ({navigation}) => {
  const navigationOptions = {
    title: 'Home',
  };
  useEffect(() => {
    console.log('cai nay chay khi moi vao');
  }, []);
  const [searchResult, setSearchResult] = useState(list);
  const _onSeach = ({text}) => {
    if (text.trim().length > 0) {
      const result = searchResult.filter(e =>
        e.toLowerCase().includes(text.trim().toLowerCase()),
      );
      setSearchResult([...result]);
    } else {
      setSearchResult([...list]);
    }
  };

  //  const  i = ({index}) =>{

  //   if (index == imagesList.length ) {
  //   index = 0
  // }
  // }

  const imageHeader = ({item}) => (
    <ImageBackground style={{width: '100%', height: 100}} source={item}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'baseline',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'red',
          }}>
          Profile
        </Text>
      </View>
    </ImageBackground>
  );

  const carousel = () => (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={100}
      data={imagesList}
      renderItem={imageHeader}
      sliderWidth={width}
      itemWidth={width}
    />
  );

  return (
    <View style={{flex: 1}}>
      <CusHeader
        title={'Profile'}
        typeL={'AntDesign'}
        colorL={'grey'}
        sizeL={30}
        nameL={'arrowleft'}
        typeR={'AntDesign'}
        colorR={'grey'}
        sizeR={30}
        nameR={'arrowright'}
      />
      {carousel()}
      <View
        style={{
          backgroundColor: 'green',
          borderRadius: 3,
          marginLeft: 8,
          marginRight: 3,
        }}>
        <TextInput
          style={{
            borderRadius: 5,
            borderWidth: 1,
            margin: 10,
            backgroundColor: 'white',
            paddingHorizontal: 20,
          }}
          onChangeText={t => {
            const a = {
              text: t,
              ahihi: 'ahihi',
            };
            _onSeach(a);
          }}
          /// onChangeText={_onSeach}
        />
      </View>
      <ScrollView>
        {searchResult.map((e, i) => (
          <View
            key={i.toString()}
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'blue',
              marginLeft: 10,
              marginRight: 5,
              paddingLeft: 20,
              marginTop: 3,
              marginBottom: 3,
            }}>
            {/* //title = {e} */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Welding', {title: e})}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 20}}>{e}</Text>
                <CusIcon
                  type={'Entypo'}
                  name={'arrow-long-right'}
                  color={'black'}
                  size={40}
                />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          width: 100,
          height: 40,
          backgroundColor: 'brown',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{justifyContent: 'center'}}> Home </Text>
      </TouchableOpacity>
    </View>
  );
};

//change
