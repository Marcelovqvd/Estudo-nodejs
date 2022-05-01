import { User } from './entity.js'

const users = []

class Repository {
  create(name, age) { 
    const user = new User(name, age)
    users.push(user)
    return 'created'
  }

  list() {
    return users
  }

  findByName(name) {
    const user = users.find(user => user.name === name)
    return user
  }
}

export { Repository }