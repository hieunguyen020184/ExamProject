import React, {useState} from 'react';
import {
  View,
  ViewScroll,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';

const list = [
  '1. Welding',
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
export const Profile = ({navigation}) => {
  const [searchResult, setSearchResult] = useState(list);
  const _onSeach = ({text}) => {
   console.log(text);
    if (text.trim().length > 0) {
      const result = searchResult.filter(e =>
        e.toLowerCase().includes(text.trim().toLowerCase()),
      );
      setSearchResult([...result]);
    } else {
      setSearchResult([...list]);
    }
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{width: '100%', height: 100}}
        source={{
          uri:
            'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}>
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
            const a ={
              text : t,
              ahihi: 'ahihi'
            }
            _onSeach(a)
          }}
          /// onChangeText={_onSeach}
        />
      </View>
      <ScrollView>
        {searchResult.map((e, i) => (
          <View
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
              <Text style={{fontSize: 20}} key={i.toString}>
                {e}
              </Text>
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
