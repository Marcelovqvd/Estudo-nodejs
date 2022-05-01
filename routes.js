import { Router } from 'express'
import { Repository } from './repository.js'

const routes = Router()

const repository = new Repository()

routes.get("/", (request, response) => {
  const all = repository.list()

  return response.status(200).json(all)
})

routes.post("/", (request, response) => {
  const { name, age } = request.body

  const userAlreadyExists = repository.findByName(name)

  if (userAlreadyExists) {
    return response.status(400).json({error: 'already exists'})
  }

  repository.create(name, age)

  return response.send()
})

export { routes }