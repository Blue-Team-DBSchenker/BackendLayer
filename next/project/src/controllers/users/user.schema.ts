import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,

  },
  password: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  documentId: {
    type: String,
    required: true,
  },
  positions: {
    type: Array,
    required: false,
  },
  
});