
import Headroom from 'headroom.js'

const VueHeadroom = {}

VueHeadroom.install = (Vue) => {
  Vue.directive('headroom', {
    bind: (el, binding) => {
      let headElement = el
      let headroom = new Headroom(headElement)
      headroom.init()
    }
  })
}

export default VueHeadroom
