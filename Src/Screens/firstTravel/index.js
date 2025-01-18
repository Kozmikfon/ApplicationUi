import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons} from '../../Assets';

const firstTravel = () => {
  return (
    <SafeAreaView style={Style.background}>
      <View
        style={[
          Style.contain,
          {
            flexDirection: 'row',
            justifyContent: 'center',
          },
        ]}>
        <Text style={Style.firsttitle}>Travel</Text>
        <Image style={Style.world} source={Icons.world} />
      </View>
      <View style={Style.containText}>
        <Text style={Style.find}> Find your Dream</Text>
      </View>
      <View style={Style.containundertext}>
        <Text style={Style.find}> Destination With Us</Text>
      </View>
    </SafeAreaView>
  );
};

export default firstTravel;
