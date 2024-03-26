const router = require('express').Router();
const UserController = require('../controllers/userController');

router.route('/')
  .get(UserController.getAllUsers)  
  .post(UserController.createUser); 

router.route('/:id')
  .get(UserController.getUserById)      
  .put(UserController.updateUserById)   
  .delete(UserController.deleteUserById); 

router.route('/:userId/friends/:friendId')
  .post(UserController.addFriend)      
  .delete(UserController.removeFriend); 

module.exports = router;
