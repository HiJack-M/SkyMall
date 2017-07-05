
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// floor shop app store
import fsApp from './reducers'
import App from './App'
import initRem from './utils/remv'
import '@/utils/bootstrap'

// 初始化rem基准
initRem()

// Needed for onTouchTap
injectTapEventPlugin()

let store = createStore(fsApp)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <Component />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// hot module replacement
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRootContainer = require('./App').default
    render(NextRootContainer)
  })
}
