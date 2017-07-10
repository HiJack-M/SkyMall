
import React from 'react'
import { Route } from 'react-router-dom'

// pages
import Index from '@/pages/index'
import Me from '@/pages/me'
import Discover from '@/pages/discover'
import Collection from '@/pages/collection'

// components
import Tabbar from '@/components/tabbar'

// icon
import HomeIcon from 'material-ui/svg-icons/action/home'
import UserIcon from 'material-ui/svg-icons/action/account-circle'
import StarIcon from 'material-ui/svg-icons/action/grade'
import EarchIcon from 'material-ui/svg-icons/social/public'

// test for redux
import Counter from '@/components/counter'

import 'normalize.css/normalize.css'
import '@/style/common.scss'

export default class App extends React.Component {
  render () {
    return (
      <div className='App-Container'>
        <Route exact path='/' component={Index} />
        <Route path='/discover' component={Discover} />
        <Route path='/collection' component={Collection} />
        <Route path='/me' component={Me} />
        <Counter />
        <Tabbar route={[
          { path: '/', label: 'Home', icon: <HomeIcon /> },
          { path: '/discover', label: 'Discover', icon: <EarchIcon /> },
          { path: '/collection', label: 'Collection', icon: <StarIcon /> },
          { path: '/me', label: 'Account', icon: <UserIcon /> }
        ]} />
      </div>
    )
  }
}
