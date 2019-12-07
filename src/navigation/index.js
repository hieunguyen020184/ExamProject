import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from '../screen/Home/Home';
import {Profile} from '../screen/Profile/Profile';
import {Welding} from '../screen/Welding/Welding';

const AppStack = createStackNavigator({
  Home,
  Profile,
  Welding,
},
{
    headerMode: "none"
});

export const RootStack = createAppContainer(AppStack)