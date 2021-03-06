import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View>
                <TextInput placeholder='Rechercher votre service'/>
                <Button title='Rechercher' onPress={() => {}}/>
            </View>
        )
    }
}

export default Search