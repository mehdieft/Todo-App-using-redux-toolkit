import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';




export default function TodoHeader() {
    const [todo, setTodo] = useState('');
    const dispatch=useDispatch();
    const OnsubmitTask=()=>{
        dispatch(addTask({
            name:todo,
            id:Math.floor(Math.random()*1000000)
        }))
        setTodo('')
    }
      
   

    return (
        <View style={styles.container}>
            <Text style={styles.text}>this is header</Text>
            <TextInput
                style={styles.input}
                placeholder="add todo"
                onChangeText={setTodo}
                value={todo}
            />
            <TouchableOpacity style={styles.button} disabled={todo.trim().length ===0} onPress={OnsubmitTask} >
                <Text style={{ fontSize: 24, color: 'white' }} >add</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // backgroundColor:'red',
        justifyContent: 'center',
        paddingBottom:20

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,

    },
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10,
        width: '80%',
        borderRadius: 5
    },
    button: {
        paddingHorizontal: 116, borderRadius: 8, borderWidth: 1,
        borderColor: '#123', paddingVertical: 8, justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#00001a',marginTop:12
    }

})