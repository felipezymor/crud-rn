import React, { useState, useContext } from 'react'
import { View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    return (
        <View style={{padding: 15}}>
            <Input 
            onChangeText={name => setUser({...user, name})}
            placeholder='Insert the name:'
            value={user.name}
            label='Name:'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            />

            <Input 
            onChangeText={email => setUser({...user, email})}
            placeholder='Insert the email:'
            value={user.email}
            label='Email:'
            leftIcon={{ type: 'font-awesome', name: 'paper-plane' }}
            />
            
            <Input 
            onChangeText={avatarUrl => setUser({...user, avatarUrl})}
            placeholder='Insert Avatar URL:'
            value={user.avatarUrl}
            label='Avatar:'
            leftIcon={{ type: 'font-awesome', name: 'camera' }}
            />

            <Button 
            type='outline'
            title='Save'
            onPress={() => {
                dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user,
                })
                navigation.goBack()
            }}
            />
        </View>
    )
}
