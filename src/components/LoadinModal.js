import React from 'react'
import { StyleSheet,
    View,
    ActivityIndicator,
    Modal
 } from 'react-native'
 import { useTheme } from '@react-navigation/native';

export default function LoadinModal({loading}) {
    const {colors} = useTheme()
    return (
        <Modal
        transparent={true}
        visible={loading}
        >
        <View style={[styles.container]}>
            
                <ActivityIndicator
                    size='large'
                    color='pink'
                />
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
