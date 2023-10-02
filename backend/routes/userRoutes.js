const express = require('express')
const { registerUser, loginUser, getMe, updateUserProfile} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()


router.post('/', registerUser )
router.post('/login',loginUser)
router.put('/update',updateUserProfile)
router.get('/me', getMe)
// router.get('/confirm/:confirmationCode',verifyUser)


module.exports = router