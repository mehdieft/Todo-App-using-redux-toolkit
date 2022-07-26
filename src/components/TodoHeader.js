import{View,Text,StyleSheet} from 'react-native';
import {useFonts} from 'expo-font'
import { AlexBrush_400Regular } from '@expo-google-fonts/alex-brush'
import AppLoading from 'expo-app-loading';

export default function TodoHeader(){
    let [fontLoaded,error]=useFonts({
        alex:AlexBrush_400Regular
    })
    if(!fontLoaded){
        return <AppLoading/>
    }
    return (
        <View>
            <Text style={styles.text}>this is header</Text>
        </View>

    )
}
const styles=StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
        fontFamily:'alex'
    }

})