import { ActivityIndicator, View } from 'react-native'
import React from 'react'

const WebViewLoading = () => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} color={'#eeeeee'} />
    </View>
  )
}
export default WebViewLoading
