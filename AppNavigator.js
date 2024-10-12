import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import DeafCommunityScreen from './DeafCommunityScreen';
import LearnSignLanguageScreen from './LearnSignLanguageScreen'; // Import the new screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="DeafCommunity" component={DeafCommunityScreen} />
        <Stack.Screen name="LearnSignLanguage" component={LearnSignLanguageScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default AppNavigator;
