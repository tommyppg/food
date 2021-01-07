import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen.js';
import TestScreen from './src/screens/TestScreen.js';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Test: TestScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title: 'Bussiness Search'
    }
  }
);

export default createAppContainer(navigator);