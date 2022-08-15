import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StartScreen from './android/Games/screens/StartScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameScreen from './android/Games/screens/GameScreen';
import {Provider} from 'react-redux';
import {Store} from './android/Games/Redux/Store';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
