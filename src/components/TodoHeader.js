import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';



export default function TodoHeader() {
    const [todo, setTodo] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>this is header</Text>
            <TextInput
                style={styles.input}
                placeholder="add todo"
                onChangeText={setTodo}
                value={todo}
            />
            <TouchableOpacity style={styles.button}>
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
        paddingBottom: 399

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
        alignItems: 'center', backgroundColor: '#8888',marginTop:12
    }

})