import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import {createBottomTabNavigator} from 'react-native-multibar';
import {Home} from '../screen/Home/Home';
import {Profile} from '../screen/Profile/Profile';
import {Welding} from '../screen/Welding/Welding';

const AppStack = createStackNavigator(
  {
    Home : {
      screen: Home,
      title: 'Home'
    },
    Profile,
    Welding,
  },
);

export const RootStack = createAppContainer(AppStack)