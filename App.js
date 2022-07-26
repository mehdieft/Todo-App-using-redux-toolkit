import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import TodoHeader from './src/components/TodoHeader';

export default function App() {
  return (
    <SafeAreaView>
      <View>

      <TodoHeader/>
      </View>
    </SafeAreaView>
  );
}


