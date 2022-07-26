import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';
export default function App() {
  
  return (
      <ScrollView style={{marginBottom:300}}>
        <TodoHeader/>
        <TodoList/>
      </ScrollView>
  );
}


