const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
  familyId: { type: String, required: true, unique: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  childrenCount: { type: Number, default: 0 },
});

const Family = mongoose.model('Family', familySchema);

module.exports = Family;