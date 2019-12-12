import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CusIcon} from '../CusIcon';

export const CusHeader = ({
  title,
  navigaL,
  typeL,
  colorL,
  sizeL,
  nameL,
  typeR,
  colorR,
  sizeR,
  nameR,
  navigaR
}) => {
  return (
    <View style={s.container}>
      {/* <View> </View> */}
      <TouchableOpacity
        style={s.left}
        onPress={() => navigation.navigate({navigaL})}>
        <CusIcon type={typeL} color={colorL} size={sizeL} name={nameL} />
      </TouchableOpacity>

      <Text style={s.title}>{title} </Text>
      <TouchableOpacity
        style={s.right}
        onPress={() => navigation.navigate({navigaR})}>
        <CusIcon type={typeR} color={colorR} size={sizeR} name={nameR} />
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  title: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
