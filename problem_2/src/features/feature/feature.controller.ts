import { Request, Response, Router } from 'express'
import { Controller, HttpStatusEnum } from '../../shared'
import FeatureService from './feature.service'

class FeatureController implements Controller {
  path = '/feature'
  route = Router()

  constructor() {
    this.initializeRoutes()
  }

  initializeRoutes(): void {
    this.route.get('/', this.getAllActiveKey)
    this.route.post('/create', this.createFeature)
    this.route.get('/:numb', this.getFeature)
    this.route.post('/update/:numb', this.bulkUpdate)
    this.route.post('/updateOne/:numb', this.updateOneSubject)
    this.route.get('/sub/:numb/feature/:featureNumb', this.getSub)
  }

  async getAllActiveKey(req: Request, res: Response): Promise<void> {
    const activeKey = await FeatureService.getAllFeatures()
    res.status(HttpStatusEnum.SUCCESS).send(activeKey)
  }

  async createFeature(req: Request, res: Response): Promise<void> {
    const data: any = req.body
    const feat = await FeatureService.createFeature(data)
    res.status(HttpStatusEnum.SUCCESS).send(feat)
  }

  async getFeature(req: Request, res: Response): Promise<void> {
    const numb = req.params.numb
    const feat = await FeatureService.getFeature(numb)
    res.status(HttpStatusEnum.SUCCESS).send(feat)
  }

  async getSub(req: Request, res: Response): Promise<void> {
    const numb = req.params.numb
    const featureNumb = req.params.featureNumb
    const feat = await FeatureService.getSubFeature(numb, featureNumb)
    res.status(HttpStatusEnum.SUCCESS).send(feat)
  }

  async bulkUpdate(req: Request, res: Response): Promise<void> {
    const numb = req.params.numb
    const data = req.body
    const feat = await FeatureService.updateSubject(numb, data)
    res.status(HttpStatusEnum.SUCCESS).send(feat)
  }

  async updateOneSubject(req: Request, res: Response): Promise<void> {
    const numb: string = req.params.numb
    const data = req.body
    const feat = await FeatureService.updateOneSubject(numb, data)
    res.status(HttpStatusEnum.SUCCESS).send(feat)
  }
}

export default FeatureController
