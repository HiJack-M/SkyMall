
import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.location.pathname === this.props.location.pathname) {
      return
    }
    if (nextProps.history.action === 'POP') {
      this.props.add(-1)
    } else {
      this.props.add(1)
    }
  }

  render () {
    return (
      <div>{ this.props.history.length }, { this.props.location.pathname }, { this.props.count }</div>
    )
  }
}

Counter.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired
}

export default Counter
