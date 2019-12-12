import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const CusIcon = props => {
  if (props.type === 'AntDesign') {
    return <AntDesign {...props} />;
  } else if (props.type === 'Entypo') {
    return <Entypo {...props} />;
  } else if (props.type === 'MaterialIcons') {
    return <MaterialIcons {...props} />;
  }
};
