import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';


const [todo,setTodo]=useState('');

export default function TodoHeader() {
    
        return (
            <View>
                <Text style={styles.text}>this is header</Text>
                <TextInput
                style={styles.input}
                placeholder="add todo"
                onChangeText={setTodo}
                value={todo}
                />
            </View>

        )
    }

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'RobotoCondensed_700Bold_Italic'
    }

})