import mongoose from 'mongoose'

const FeatureSchema = new mongoose.Schema({
  feature_0: {
    type: Number
  },
  feature_1: {
    type: Number
  },
  feature_2: {
    type: Number
  },
  feature_3: {
    type: Number
  },
  feature_4: {
    type: Number
  },
  feature_5: {
    type: Number
  },
  feature_6: {
    type: Number
  },
  feature_7: {
    type: Number
  },
  feature_8: {
    type: Number
  },
  feature_9: {
    type: Number
  }
})

const FeatureModel = mongoose.model('Feature', FeatureSchema)

export default FeatureModel
