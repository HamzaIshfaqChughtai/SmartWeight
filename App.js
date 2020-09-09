import React, { Fragment, useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { StyleProvider, Container, Root } from 'native-base'
// import Navigation from "./app/navigation"
import { Colors } from "./app/styles/colors"
// import { Provider } from "react-redux"
import platform from './native-base-theme/variables/platform'
import getTheme from './native-base-theme/components'
// import configureStore from './app/redux/createStore'
import SplashScreen from 'react-native-splash-screen'
import StackRoute from './app/navigation/StackRoute';
console.disableYellowBox = true
// LogBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'RNDeviceInfo', 'Warning: An update']);
const App = () => {
  // const store = configureStore()

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Fragment>
      <StyleProvider style={getTheme(platform)}>
        <Root>
          {/* <Provider store={store}> */}
          <StatusBar barStyle="light-content" backgroundColor={Colors.Status} />
          {/* <Navigation /> */}
          <StackRoute />
          {/* </Provider> */}
        </Root>
      </StyleProvider>
    </Fragment>
  );
};

export default App;
