import { v4 } from 'uuid'

class User {
  constructor(name, age) {
    this.id = v4()
    this.name = name
    this.age = age
    this.created_at = new Date()
  }
}

export { User }