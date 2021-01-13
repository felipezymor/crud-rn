import React, {useContext} from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default UserList => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Delete User', 'Do you confirm user deletion?', [
            {
                text: 'Yes',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'No'
            }
        ])
    }


    function getUserItem({ item: user }) {

        const buttons = [
            
                <Button 
            type='clear'
            icon={<Icon name='edit' size={25} color='#487eb0' />}
            onPress={() => UserList.navigation.navigate('UserForm', user)}
            />, 

            <Button 
            type='clear'
            icon={<Icon name='delete' size={25} color='#e84118' />}
            onPress={() => confirmUserDeletion(user)}
            />
            
        ]
        return(
        <ListItem 
        key={user.id} 
        bottomDivider 
        onPress={() => UserList.navigation.navigate('UserForm', user)}
        >
            <Avatar rounded source={{uri: user.avatarUrl}} />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.ButtonGroup 
            buttons={buttons} 
            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}} 
            innerBorderStyle={{color: 'transparent'}} 
            />
        </ListItem>
        )
    }
    return (
        <View>
            <FlatList 
            keyExtractor={user => user.id.toString()}
            data={state.users}
            renderItem={getUserItem}
            />
        </View>
    )
}
