import React from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import {Profile} from '../Profile/Profile'
import { CusHeader } from '../../component/CusHeader';



export const Welding = ({navigation}) => {
// ???????????????????????????????????????????????
  
//{title={i => Title(i)}
return (
  <View>
    <CusHeader
      title={'Detail'}
      typeL={'AntDesign'}
      colorL={'pink'}
      sizeL={30}
      nameL={'arrowleft'}
      typeR={'AntDesign'}
      colorR={'pink'}
      sizeR={30}
      nameR={'arrowright'}
    />
    <TouchableOpacity
      style={{
        alignSelf: 'center',
        width: '100%',
        height: 40,
        backgroundColor: 'brown',
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
        marginBottom: 0,
      }}
      onPress={() => navigation.navigate('Profile')}>
      <Text style={{justifyContent: 'center'}}>
        {navigation.getParam('title')}{' '}
      </Text>
    </TouchableOpacity>
  </View>
);


};