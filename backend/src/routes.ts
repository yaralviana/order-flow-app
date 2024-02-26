import { Router } from 'express'
import { CreateUserController } from './controllers/user/createUserController'

const router = Router()

router.post('/users', new CreateUserController().handle)

export { router }

