import React, { useEffect } from 'react'
import EasyWebView from '@/views/EasyWebView'
import SplashScreen from 'react-native-splash-screen'

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      console.log(111)
      SplashScreen.hide() // 隐藏启动屏
    }, 1000)
  }, [])

  return <EasyWebView url='http://zd.8180.top' />
}

export default App
