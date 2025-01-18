import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './styles';;
import {Icons} from '../../Assets';

const Linkedin = () => {
  return (
    <View style={Style.left}>
      <View style={Style.search}>
        <Image style={Style.imageleft} source={Icons.left} />
        <Text style={Style.searchAlani}> Rebecaa Max</Text>
      </View>
    </View>
  );
};

export default Linkedin;
