
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
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
