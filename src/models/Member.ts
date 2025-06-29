import mongoose, { Schema, models, model } from 'mongoose'

const MemberSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String },
  skills: [{ type: String }],
  availability: { type: String },
  experience: { type: String },
  matchScore: { type: Number },
})

export default models.Member || model('Member', MemberSchema)