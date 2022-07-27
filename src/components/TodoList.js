import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector,useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

export default function TodoList(){
    const Todos=useSelector((state)=>state.tasks)
    const dispatch=useDispatch()
    
 
    const deleteItem=(id)=>{
        dispatch(deleteTask({id:id}))

    }
    const renderItem=({item})=>{
        return (
            <View style={styles.todoContainer}>
                <Text style={styles.todoText}>{item.name}</Text>
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
            data={Todos}
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
        backgroundColor:'#0d1a26',
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