const router = require('express').Router();
const ThoughtsController = require('../controllers/thoughtsController');

router.route('/')
  .get(ThoughtsController.getAllThoughts) 
  .post(ThoughtsController.createThought); 


router.route('/:id')
  .get(ThoughtsController.getThoughtById)    
  .put(ThoughtsController.updateThoughtById)   
  .delete(ThoughtsController.deleteThoughtById); 


router.route('/:thoughtId/reactions')
  .post(ThoughtsController.addReaction) 
router.route('/:thoughtId/reactions/:reactionId')
  .delete(ThoughtsController.removeReaction); 

module.exports = router;
