import * as mongoose from 'mongoose';

export const RideSchema = new mongoose.Schema({
 /* passengers: {
    type: Array,
    required: true,
  },*/

  companyId: {
    type: String,
    required: true,
  },
  pasword: {
    type: String,
    required: true,
  },

  compnayName: {
    type: String,
    required: true,
   // default: 'Poland',
  },
 
});