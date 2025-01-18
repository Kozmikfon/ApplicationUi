import {Dimensions, StyleSheet} from 'react-native';
//const windowWidth=Dimensions.get('window').width;
//const windowHeight=Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#FE8A00',
    width: '100%',
    height: '58%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ket: {
    color: 'white',
    fontWeight: 'bold',
  },
  prfil: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    marginLeft: 10,
  },
  ıcon: {
    height: 20,
    width: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 20,
    width: 20,
    tintColor: 'white',
    marginLeft: 270,
    marginRight: 30,
    fontWeight: 'bold',
  },
  shop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
    width: 20,
    tintColor: 'white',
    marginRight: 15,
    fontWeight: 'bold',
    marginTop: 38,
  },
  bike: {
    height: 110,
    width: 110,
    marginRight:500,
    marginTop:100,
  },
  bikew: {
    flex: 1, // Boşluğu doldurur.
    justifyContent: 'center', // Dikey eksende ortalar.
    alignItems: 'center', // Yatay eksende ortalar.
    
  },
  searchAlani: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position:'absolute',
    width: '100%',
    height:'180%',
    backgroundColor: 'white',
    padding: 11,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white',
    marginTop:280,
    
  },
  firstText:{
    fontSize:20,
    fontWeight:'bold',
    marginRight:198,
    marginTop:10,

  },

  profilAlani:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    position:'absolute',
    width: '13%',
    height:'11%',
    backgroundColor: 'gray',
    padding: 11,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
    marginTop:360,
    marginLeft:40,

  }
});
