import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';
export default function App() {
  
  return (
      <View>
        <ScrollView>

        <TodoHeader/>
        <TodoList/>
        </ScrollView>
      </View>
    
  );
}


