import {View, Text, Button} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MenuStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="CartScreen"
        component={CartScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Order"
        component={Order}
      />
    </Stack.Navigator>
  );
}

function CartScreen({navigation}) {
  return (
    <View>
      <Text>Welcome To cart Screen</Text>
      <Button
        title="Go to Order"
        onPress={() => navigation.navigate('Order')}
      />
    </View>
  );
}

function Order() {
  return (
    <View>
      <Text>Order</Text>
    </View>
  );
}
