import ListResto from '../views/pages/list'
import Detail from '../views/pages/detail'
import Favorit from '../views/pages/favorit'

const routes = {
  '/': ListResto, // default page
  '/detail/:id': Detail,
  '/favorit': Favorit
}

export default routes
