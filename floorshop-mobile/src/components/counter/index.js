
import Counter from './counter'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addCount } from '@/reducers'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (count) => {
      dispatch(addCount(count))
    }
  }
}

const ContainersCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default withRouter(ContainersCounter)
