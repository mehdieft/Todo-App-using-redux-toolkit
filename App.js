import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';
import {Provider} from 'react-redux'
import store from './src/redux/store';
export default function App() {

  const RootApp=()=>{
    return (
      <SafeAreaView>
        <ScrollView>
          <TodoHeader/>
          <TodoList/>

        </ScrollView>
      </SafeAreaView>
    )
  }
  
  return (
      <Provider store={store}>
        <RootApp/>
      </Provider>
    
  );
}


