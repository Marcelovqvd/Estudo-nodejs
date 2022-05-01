import { User } from './entity.js'
import { Repository } from './repository'

class UseCase {
  handle(name) {
    const user = new User(name)

    const repository = new Repository()

    


  }
}

export { UseCase }