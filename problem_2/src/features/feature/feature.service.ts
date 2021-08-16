import Feature from './feature.model'

export default class FeatureService {
  static getAllFeatures = async (): Promise<unknown> => {
    return Feature.find()
  }

  static createFeature = async (feature: any): Promise<unknown> => {
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

  static getFeature = async (numb: string): Promise<unknown> => {
    const getAllFeatures = await Feature.find({}).select(`feature_${numb}`)

    if (getAllFeatures) {
      const list = []
      const featureNumb = `feature_${numb}`

      for (let i = 0; i < getAllFeatures.length; i++) {
        list.push(getAllFeatures[i][featureNumb])
      }
      return list
    } else {
      return 'Error'
    }
  }

  static getSubFeature = async (
    sub: string,
    featureNumb: string
  ): Promise<unknown> => {
    const getAllSubjects = await Feature.find().skip(parseInt(sub)).limit(1)
    return getAllSubjects.length
      ? { feature: getAllSubjects[0][`feature_${featureNumb}`] }
      : 'Error'
  }

  static updateOneSubject = async (
    subId: string,
    data: any
  ): Promise<unknown> => {
    const findSubject = await Feature.findOne({ _id: subId })

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

  static updateSubject = async (sub: string, data: any): Promise<unknown> => {
    const getNumber = sub.split('-')
    const findSubject = await Feature.find()
      .skip(parseInt(getNumber[0]))
      .limit(parseInt(getNumber[1]) - parseInt(getNumber[0]) + 1)
    const IDs: string[] = []

    findSubject.forEach((element: any) => {
      IDs.push(element._id)
    })

    const result: any[] = []

    for (let i = 0; i < IDs.length; i++) {
      result.push(await FeatureService.updateOneSubject(IDs[i], data))
    }

    return result
  }
}
