import Feature from './feature.model'
import IFeature from './feature.interface'
import HttpException from '../../exceptions/httpException'
import { HttpStatusEnum } from '../../shared'

export default class FeatureService {
  static getAllFeatures = async (): Promise<any> => {
    const features = await Feature.find()
    console.log('FEATURE', features.length)
    return features
  }

  static createFeature = async (feature: any): Promise<any> => {
    const feat: any = new Feature()
    feat.feature_0 = feature.feature_0
    feat.feature_1 = feature.feature_1
    feat.feature_2 = feature.feature_2
    feat.feature_3 = feature.feature_3
    feat.feature_4 = feature.feature_4
    feat.feature_5 = feature.feature_5
    feat.feature_6 = feature.feature_6
    feat.feature_7 = feature.feature_7
    feat.feature_8 = feature.feature_8
    feat.feature_9 = feature.feature_9
    await Feature.create(feat)
    return feat
  }

  static getFeature = async (numb: any): Promise<any> => {
    const getAllFeatures = await Feature.find({}).select(`feature_${numb}`)
    //console.log("LENGTH ===> ", getAllFeatures.length);
    //console.log("LENGTH ===> ", getAllFeatures);
    if (getAllFeatures) {
      let list = []
      // console.log("req number ========> ", numb);
      let featureNumb = `feature_${numb}`
      //console.log("TEST ====> ", getAllFeatures[1].featureNumb);
      //console.log("NUMBER ===> ", featureNumb);
      for (let i = 0; i < getAllFeatures.length; i++) {
        list.push(getAllFeatures[i][featureNumb])
      }
      return list
    } else {
      return 'ERROR'
    }
  }

  static getSubFeature = async (sub: any, featureNumb: any): Promise<any> => {
    const getAllSubjects = await Feature.find().skip(parseInt(sub)).limit(1)
    return !!getAllSubjects.length
      ? { feature: getAllSubjects[0][`feature_${featureNumb}`] }
      : 'Error'
  }

  static updateOneSubject = async (subId: any, data: any): Promise<any> => {
    console.log('ID ======> ', subId)
    const findSubject = await Feature.findOne({ _id: subId })
    console.log('FIND =====> ', findSubject)
    if (findSubject) {
      return Feature.findByIdAndUpdate(
        { _id: subId },
        { $set: data },
        { upsert: true, new: true }
      )
    } else {
      return "Can't find subject"
    }
  }

  static updateSubject = async (sub: any, data: any): Promise<any> => {
    const getNumber = sub.split('-')
    const findSubject = await Feature.find()
      .skip(parseInt(getNumber[0]))
      .limit(parseInt(getNumber[1]) - parseInt(getNumber[0]) + 1)
    let IDs: string[] = []

    findSubject.forEach((element: any) => {
      IDs.push(element._id)
    })
    console.log('FIND ===+> ', IDs)
    let result: any[] = []

    for (let i = 0; i < IDs.length; i++) {
      result.push(await FeatureService.updateOneSubject(IDs[i], data))
    }
    // console.log("RESULT ===> ", result);
    // console.log("UPDATED =====> ", updatedSubject);

    return result
  }
}
