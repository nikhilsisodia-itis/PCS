const Family = require('../models/Family');
const User = require('../models/User');

const createFamily = async (req, res) => {
  const { familyId, members } = req.body;

  const familyExists = await Family.findOne({ familyId });

  if (familyExists) {
    res.status(400).json({ message: 'Family already exists' });
    return;
  }

  const family = await Family.create({
    familyId,
    members,
  });

  if (family) {
    res.status(201).json(family);
  } else {
    res.status(400).json({ message: 'Invalid family data' });
  }
};

const addFamilyMember = async (req, res) => {
  const { familyId, memberId } = req.body;

  const family = await Family.findOne({ familyId });

  if (family) {
    family.members.push(memberId);
    await family.save();
    res.json(family);
  } else {
    res.status(404).json({ message: 'Family not found' });
  }
};

const deleteFamilyMember = async (req, res) => {
  const { familyId, memberId } = req.body;

  const family = await Family.findOne({ familyId });

  if (family) {
    family.members = family.members.filter(
      (member) => member.toString() !== memberId
    );
    await family.save();
    res.json(family);
  } else {
    res.status(404).json({ message: 'Family not found' });
  }
};

module.exports = { createFamily, addFamilyMember, deleteFamilyMember };