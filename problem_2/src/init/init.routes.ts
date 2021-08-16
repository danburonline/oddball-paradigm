import { Express } from 'express'
import { Controller } from '../shared'
import { FeatureController } from '../features/feature'

const URL_PREFIX = '/api'

export default (app: Express): void => {
  const controllers: Controller[] = [new FeatureController()]

  controllers.forEach(controller => {
    app.use(URL_PREFIX + controller.path, controller.route)
  })
}
