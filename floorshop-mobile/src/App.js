
import React from 'react'
import { Route } from 'react-router-dom'
// pages
import Index from '@/pages/index'
import Order from '@/pages/order'
import Me from '@/pages/me'
import Tabbar from '@/components/tabbar'

// test for redux
import Counter from '@/components/counter'

import 'normalize.css/normalize.css'
import '@/style/common.scss'

export default class App extends React.Component {
  render () {
    return (
      <div className='App-Container'>
        <Route exact path='/' component={Index} />
        <Route path='/order' component={Order} />
        <Route path='/me' component={Me} />
        <Counter />
        <Tabbar />
      </div>
    )
  }
}
