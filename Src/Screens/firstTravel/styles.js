import {create} from 'domain';
import {title} from 'process';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    background: {
        backgroundColor: '#015A96',
        flex: 1,
    },
    contain: {
        marginTop:400,
        backgroundColor: '#015A96',
        justifyContent: 'center', // Dikeyde ortalar
        alignItems: 'center', // Yatayda ortalar
    },
    firsttitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight:8,
        color:'white',
        fontStyle:'italic',
        
    },
    point: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    world:{
        height: 30,
        width: 30,
       tintColor:'white',
       fontWeight: 'bold',

    },
    find:{
        fontSize:20,
        color:'white',
        justifyContent: 'center',//yde ortalar
        alignItems: 'center', // Yatayda ortalar

    },
    containText: {
        marginTop: 28,
        backgroundColor: '##015A96',
        justifyContent: 'center', // Dikeyde ortalar
        alignItems: 'center', // Yatayda ortalar

    },
    containundertext: {
        backgroundColor: '##015A96',
        justifyContent: 'center', // Dikeyde ortalar
        alignItems: 'center', // Yatayda ortalar

    },

});
