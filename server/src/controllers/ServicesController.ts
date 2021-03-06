import { Request, Response } from 'express'
import ServicesService from '../services/ServicesService'

class ServicesController {
  async index(req: Request, res: Response) {
    const servicesService = new ServicesService()

    const services = await servicesService.getServices()

    res.json(services)
  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    const servicesService = new ServicesService()

    const service = await servicesService.getServiceById(id)

    res.json(service)
  }

  async create(req: Request, res: Response) {
    const servicesService = new ServicesService()

    await servicesService.createService(req.body)

    res.status(201).send()
  }

  async update(req: Request, res: Response) {
    const { id } = req.params

    const servicesService = new ServicesService()

    await servicesService.updateService(id, req.body)

    res.send()
  }

  async pay(req: Request, res: Response) {
    const { id } = req.params

    const servicesService = new ServicesService()

    servicesService.payService(id, req.body)

    res.send()
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params

    const servicesService = new ServicesService()

    await servicesService.deleteService(id)

    res.send()
  }
}

export default ServicesController
