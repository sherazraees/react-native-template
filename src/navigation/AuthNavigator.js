import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Setting} from 'screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainStack" component={HomeStackNavigator} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}

function Registration() {
  return (
    <View>
      <Text>Registration</Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen sdkjksdj sjdjsk</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('TabNavigator')}
      />
    </View>
  );
}
