
import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'

import './index.scss'

class Tabbar extends React.Component {
  constructor (props) {
    super(props)
    let path = props.location.pathname
    let index = _.findIndex(props.routes, (i) => i.path === path)
    this.state = { initalTab: index, path: props.routes[index].path }
    this.tabChange = this.tabChange.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    this.setState({ path: nextProps.location.pathname })
  }

  tabChange (value) {
    this.props.history.push(value)
  }

  render () {
    const tabs = this.props.routes.map((tab) => {
      return <Tab value={tab.path} label={tab.label} icon={tab.icon} key={tab.path} />
    })
    return (
      <Tabs className='fs-tabs' onChange={this.tabChange} initialSelectedIndex={this.state.initalTab} value={this.state.path}>
        {tabs}
      </Tabs>
    )
  }
}

Tabbar.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  routes: PropTypes.array
}

export default withRouter(Tabbar)
