import {View, Text, Image} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons} from '../../Assets';
import {SafeAreaView} from 'react-native-safe-area-context';

const Example = () => {
  return (
    <SafeAreaView>
      <View style={Style.container}>
        <View style={Style.prfil}>
          <Image style={Style.ıcon} source={Icons.kety} />
          <Text style={Style.ket}> KETY</Text>
          <Image style={Style.search} source={Icons.search} />
        </View>
        <Image style={Style.shop} source={Icons.shopping} />
        <View style={Style.bikew}>
          <Image style={Style.bike} source={Icons.bicycle} />
        </View>
      </View>
      <View style={Style.searchAlani}>
        <Text style={Style.firstText}> Featured Product</Text>
      </View>
      <View style={Style.profilAlani}>

      </View>
    </SafeAreaView>
  );
};

export default Example;
