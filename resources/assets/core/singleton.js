const singleton = Symbol('singleton')
const booted = Symbol('booted')

export default class Singleton {
  static get instance () {
    if (!this[singleton]) {
      this[singleton] = new this
    }

    return this[singleton]
  }

  constructor () {
    let Class = this.constructor // or this.constructor

    if (!Class[singleton]) {
      Class[singleton] = this
    }

    return Class[singleton]
  }

  boot () {
    if (!this[booted]) {
      this[booted] = true
      return !this[booted]
    }

    return true
  }

  get booted () {
    return !!this[booted]
  }
}
