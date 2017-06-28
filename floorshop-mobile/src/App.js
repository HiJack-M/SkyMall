
import React from 'react'
import Index from '@/pages/index'
import Tabbar from '@/components/tabbar'

import 'normalize.css/normalize.css'

export default class App extends React.Component {
  render () {
    return (
      <div className='App-Container'>
        <Index />
        <Tabbar />
      </div>
    )
  }
}
