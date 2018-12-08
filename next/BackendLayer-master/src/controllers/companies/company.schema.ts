import * as mongoose from 'mongoose';

export const RideSchema = new mongoose.Schema({
 /* passengers: {
    type: Array,
    required: true,
  },*/

  companyId: {
    type: Number,
    required: true,
  },
  compnayName: {
    type: String,
    required: true,
   // default: 'Poland',
  },
 
});