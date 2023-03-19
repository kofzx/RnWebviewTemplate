import { FC } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import WebView from 'react-native-webview'
import WebViewLoading from './WebViewLoading'

interface EasyWebViewProps {
  url: string
}

const EasyWebView: FC<EasyWebViewProps> = ({ url }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={20}
      behavior='padding'
      enabled={Platform.OS === 'android'}>
      <WebView
        allowsFullscreenVideo={true}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={async (event) => {
          if (event.nativeEvent.data === 'goBack') {
            // todo
          }
        }}
        onContentProcessDidTerminate={() => {
          console.log('page did terminate')
        }}
        onError={(event) => {
          console.log('http page error: ', event)
        }}
        renderLoading={() => <WebViewLoading />}
        source={{ uri: url }}
      />
    </KeyboardAvoidingView>
  )
}

export default EasyWebView
