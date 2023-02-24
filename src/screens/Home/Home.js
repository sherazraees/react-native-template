import {View, Text, Button} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{margin: 20}}>I am in Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Setting')}
        title="Go to Setting"
      />
    </View>
  );
};

export default Home;
