import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from './pages/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PracticCategoriesList from './pages/PracticCategoriesList';
import PracticCategory from './pages/PracticCategory';
import {Neww} from './pages/Settingspage';

function SettingsScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settingspage" component={Neww} />
    </Stack.Navigator>
  );
}

function AccountScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen
        name="PracticCategoriesList"
        component={PracticCategoriesList}
      />
      <Stack.Screen name="PracticCategory" component={PracticCategory} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} initialRouteName="Main">
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="cogs" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Main"
          component={MainStack}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account 2',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
