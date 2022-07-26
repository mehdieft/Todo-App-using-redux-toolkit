import {View,Text,FlatList} from 'react-native';

export default function TodoList(){
    const data=[
        {id:1,title:'this is simple test'},
        {id:2,title:'this is simple test'},
        {id:3,title:'this is simple test'},
    ]
    const renderItem=(item)=>{
        return (
            <View style={styles.todoContainer}>
                <Text style={styles.todoText}></Text>
                <Text></Text>

            </View>
        )
    }
    return (
        <View>
            <Text>TodoList</Text>
            <FlatList 
            style={styles.todos}
            data={data}
            keyExtractor={(item)=>item.id.toString()} 

            />
        </View>
    )
}
const styles=StyleSheet.create({
    todos:{
        justifyContent:'center',
        alignItems: 'center'
    },
    todoContainer:{
        backgroundColor:'#321123',
        borderRadius:5,
        marginTop:12

    },todoText:{
        color:'white',
        fontSize: 16,
        textAlign: 'center'
    },

})