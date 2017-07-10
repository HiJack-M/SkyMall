
import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import SearchInput from '@/components/searchInput'

import './index.scss'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

class Banner extends React.Component {
  render () {
    return (
      <div className='fs-header-banner'>
        <AutoPlaySwipeableViews>
          <div className='fs-swipe-item'><img src='http://pm.uppershop.hk/infofile/image/20150715/20150715132704_0157.jpg' /></div>
          <div className='fs-swipe-item'><img src='http://www.qnsb.com/fzepaper/site1/qnsb/res/1/1/2007-10/26/C7/res06_attpic_brief.jpg' /></div>
          <div className='fs-swipe-item'><img src='http://retaildesignblog.net/wp-content/uploads/2014/01/Prada-store-by-Roberto-Baciocchi-Hong-Kong-04.jpg' /></div>
        </AutoPlaySwipeableViews>
        <SearchInput />
      </div>
    )
  }
}

export default Banner
