import {View, Text, Button} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuStackNavigator from './MenuNavigator';

const Tab = createBottomTabNavigator();
export default TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen name="Settings" component={MenuStackNavigator} />
    </Tab.Navigator>
  );
};

function Home({navigation}) {
  return (
    <View>
      <Text>Home hai bhae yeh</Text>
    </View>
  );
}

function Setting() {
  return (
    <View>
      <Text>Setting</Text>
      <Button
        title="Go to CartScreen"
        onPress={() => navigation.navigate('CartScreen')}
      />
    </View>
  );
}
