import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './src/context/UsersContext';

const Stack = createStackNavigator();

export default function App() {
  return (

    <UsersProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#353b48" translucent={false} />
        <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={screenOptions}
        >
          <Stack.Screen
          name='UserList'
          component={UserList}
          options={({navigation}) => {
            return{
              title: 'User List',
              headerRight: () => (
                <Button 
                type='clear'
                icon={<Icon name='add' size={25} color='#fff' />}
                onPress={() => navigation.navigate('UserForm')}
                />
              )
            }
          }}
          />
          <Stack.Screen 
          name='UserForm'
          component={UserForm}
          options={{
            title: 'User Form'
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#353b48',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }

}
