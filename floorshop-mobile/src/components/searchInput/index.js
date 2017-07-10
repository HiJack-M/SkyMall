
import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui/svg-icons/action/search'

import './index.scss'

class SearchInput extends React.Component {
  render () {
    return (
      <div className='fs-search-input'>
        <Paper zDepth={2} className='fs-input-wrapper'>
          <SearchIcon className='fs-search-input-icon' />
          <TextField className='fs-search-input-input' hintText='production / shop / region' underlineShow={false} />
        </Paper>
      </div>
    )
  }
}

export default SearchInput
