const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String },
  skills: [{ type: String }],
  availability: { type: String },
  experience: { type: String },
  matchScore: { type: Number },
})

module.exports = mongoose.models.Member || mongoose.model('Member', MemberSchema)