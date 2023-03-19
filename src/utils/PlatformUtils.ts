import { Alert, Platform } from 'react-native'
import Toast from 'react-native-root-toast'

export function isAndroid() {
  return Platform.OS === 'android'
}
export function isIos() {
  return Platform.OS === 'ios'
}

export const message = {
  toast(errorMessage: string, duration = Toast.durations.SHORT, position = Toast.positions.CENTER) {
    Toast.show(errorMessage, {
      duration,
      position: position,
      animation: true,
      hideOnPress: true,
    })
  },
}

export function confirm(title: string, messageText: string, cancelText = '取消', okText = '确定') {
  return new Promise((resolve) => {
    Alert.alert(title, messageText, [
      { text: cancelText, onPress: () => resolve(false) },
      { text: okText, onPress: () => resolve(true) },
    ])
  })
}
