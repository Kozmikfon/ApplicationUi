import {View, Text, SafeAreaView, Image,TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Style from './styles';
import {Icons, Images} from '../../Assets';

const Travel = () => {
  return (
    <SafeAreaView style={Style.backgrounnnf}>
      <View style={Style.iconsBar}>
        <View style={Style.textBar}>
          <Text style={Style.textHi}>Hi, Mahmut</Text>
          <Image style={Style.textİcon} source={Icons.world} />
        </View>
        <Image style={Style.iconUsers} source={Icons.user} />
      </View>

      <Text style={Style.exploreText}>Explore The World</Text>

      <View style={Style.searchAlani}>
        <View style={Style.searchBar}>
          <Text style={Style.search}> Search places</Text>
          <Text style={Style.textsembol}> | </Text>
        </View>
        <Image style={Style.iconSearch} source={Icons.settings}></Image>
      </View>
      
      <View style={Style.popular}>
        <Text style={Style.textPopular}> Popular places </Text>
        <Text style={Style.textView}> View all </Text>
      </View>

      <ScrollView horizontal={true} style={Style.scroll}>
      <View style={Style.MostView}>
        <View style={Style.NearbyView}>
        <TouchableOpacity style={Style.Touchmost}>
          <Text style={Style.textMost}> Most Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.Touchnear}>
          <Text style={Style.textNearby}> Nearby</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={Style.LatestTouch}>
          <Text style={Style.textLatest}> Latest</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      
      <View style={Style.mountain}>
        <View style={Style.blueMountain}>
          <Image style={Style.mountainImage} source={Images.mountain} />
          <View style={Style.locationArea}></View>
          <Image style={Style.loveIcon} source={Icons.love} />
          <Text style={Style.locationText}> Mount Fuji, Tokyo</Text>
          <Image style={Style.location} source={Icons.location} />
          <Text style={Style.textLoca}> Tokyo, Japan </Text>
          <Image style={Style.starIcon} source={Icons.star} />
          <Text style={Style.textStar}> 4.8</Text>        
        </View>
        <Image style={Style.mountaintwo} source={Images.mountaintwo} /> 
      </View>
      <View style={Style.home}>
        <View style={Style.hearth}>
          <Image style={Style.homeIcon} source={Icons.home}/>
          <Image style={Style.clockIcon} source={Icons.clock}/>
          <Image style={Style.lovIcon} source={Icons.lov}/>
        </View>
        <Image style={Style.userIcon} source={Icons.user}/>
      </View>
    </SafeAreaView>
  );
};

export default Travel;
