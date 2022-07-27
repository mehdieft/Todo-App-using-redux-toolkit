import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function TodoList(){
    const data=[
        {id:1,title:'this is simple test'},
        {id:2,title:'this is simple test'},
        {id:3,title:'this is simple test'},
        {id:4,title:'this is simple test'},
        {id:5,title:'this is simple test'},
        {id:6,title:'this is simple test'},
    ]
    const deleteItem=(id)=>{
        console.log("this is id",id)
    }
    const renderItem=({item})=>{
        return (
            <View style={styles.todoContainer}>
                <Text style={styles.todoText}>{item.title}</Text>
                <TouchableOpacity style={{marginHorizontal:15}} onPress={()=>{
                    deleteItem(item.id)
                }}>

                <AntDesign name="delete" size={32} color="red" />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <Text>TodoList</Text>
            <FlatList 
            nestedScrollEnabled
            style={styles.todos}
            data={data}
            keyExtractor={(item)=>item.id.toString()} 
            renderItem={renderItem}

            />
        </View>
    )
}
const styles=StyleSheet.create({
    todos:{
        // justifyContent:'center',
        // alignItems: 'center'
    },
    todoContainer:{
        backgroundColor:'#df9fbf',
        borderRadius:5,
        marginTop:12,
        flexDirection: 'row',
        textAlign:'center',
        paddingVertical:30,
        justifyContent:'space-between',
        marginHorizontal:5




    },todoText:{
        color:'white',
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal:15,
    },

})