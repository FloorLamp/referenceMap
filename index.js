module.exports = class ReferanceMap {
  /**
   * Handle mapping arbitrary JS object to ints
   */
  constructor () {
    this.intRefProp = Symbol('int')
    this._map = []
  }

  /**
   * Adds an object to the reference map returning an int to be used as a
   * reference
   * @param {*} obj
   * @param {*} type - optional
   * @return {integer}
   */
  add (obj, type) {
    if (!(obj !== null && typeof obj === 'object')) {
      throw new Error(`invalid object "${obj}"`)
    }

    let ref = obj[this.intRefProp]
    if (ref === undefined) {
      ref = this._map.push({obj, type}) - 1
      obj[this.intRefProp] = ref
    }
    return ref
  }

  /**
   * gets a POJO given a reference as an int
   * @param {integer} ref
   * @param {Object} type - optional
   * @return {*}
   */
  get (ref, typeCheck) {
    const result = this._map[ref]
    if (result === undefined) {
      throw new Error(`invalid reference "${ref}". Object doesn't exist`)
    } else if (typeCheck && result.type !== typeCheck) {
      throw new Error(`invalid reference "${ref}". Expected type: "${typeCheck}" actual type: "${result.type}"`)
    }
    return result.obj
  }

  /**
   * deletes an object given a reference as an int
   * @param {integer}
   * @return {boolean} whether or not the object was deleted
   */
  delete (ref) {
    delete this._map[ref].obj[this.intRefProp]
    delete this._map[ref]
  }

  /**
   * clears the reference map of a objects
   */
  clear () {
    this._map.forEach(el => {
      delete el.obj[this.intRefProp]
    })
    this._map = []
  }

  /**
   * returns the number of items in the reference map
   * @return {integer}
   */
  get size () {
    return this._map.length
  }

  /**
   * tests whether a given reference is valid or not
   * @return {boolean}
   */
  has (ref) {
    return this._map[ref] !== undefined
  }
}
