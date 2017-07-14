
import Index from '@/pages/Index'
import NotFound from '@/pages/404'

const routes = [
  {
    name: 'index',
    path: '/index',
    component: Index
  }, {
    name: 'notFound',
    path: '/404',
    component: NotFound
  }
]

export default routes
