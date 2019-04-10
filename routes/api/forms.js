const express = require('express');
const router = express.Router();

// Form Model
const Form = require('../../models/Form');

// @route   GET api/forms
// @desc    Get All forms
// @access  Public

// '/' here represent the api/form endpoint but since we already in it we don't need to put it in anymore 
router.get('/', (req, res) => { 
    Form.find()
      .sort({ date: -1 })       // -1 for descending 
      .then(forms => res.json(forms));
  });

// @route   POST api/forms
// @desc    Create An Form
// @access  Private
router.post('/', (req, res) => {
    // Form here is the name of our model 
    const newForm = new Form({
      email: req.body.email
    });
  
    newForm.save().then(form => res.json(form));
  });

// @route   DELETE api/form/:id
// @desc    Delete A form
// @access  Private
router.delete('/:id', (req, res) => {
    Form.findById(req.params.id) // findById, method available with Mongoose method 
      .then(form => form.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;