import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from './utils/colors';
import {HomePage} from './pages';

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Colors.secondary,
  },
  headerTitleContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerTintColor: Colors.cream,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar backgroundColor={Colors.tertiary} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultScreenOptions}>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
