import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/users
// GET localhost:3000/todos
router.get('/', skillsCtrl.index)
// GET localhost:3000/todos

export { router }
