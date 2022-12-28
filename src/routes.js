import { Router } from 'express'
import { v4 } from 'uuid'

import User from './app/models/User'

const routes = new Router()

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Cesar',
    email: 'cesar@gmail.com',
    password_hash: '5252'
  })
  return response.json(user)
})

export default routes
