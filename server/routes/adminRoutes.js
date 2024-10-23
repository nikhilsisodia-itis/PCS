const express = require('express');
const {
  createFamily,
  addFamilyMember,
  deleteFamilyMember,
} = require('../controllers/familyController');
const router = express.Router();

router.post('/create-family', createFamily);
router.post('/add-family-member', addFamilyMember);
router.post('/delete-family-member', deleteFamilyMember);

module.exports = router;