// Create web service
// This file is used to create web service for comments

// Import express
const express = require('express');
const router = express.Router();

// Import comments model
const Comments = require('../models/comments');

// Import auth
const auth = require('../middleware/auth');

// Import comments controller
const CommentsController = require('../controllers/comments');

// Create web service
// Create comment
router.post('/comment', auth, CommentsController.createComment);

// Get all comments
router.get('/comments', auth, CommentsController.getComments);

// Get comment by id
router.get('/comment/:id', auth, CommentsController.getCommentById);

// Update comment
router.patch('/comment/:id', auth, CommentsController.updateComment);

// Delete comment
router.delete('/comment/:id', auth, CommentsController.deleteComment);

// Export module
module.exports = router;