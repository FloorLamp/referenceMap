module.exports = class ReferanceMap {
  /**
   * Handle mapping arbitary JS object to ints
   */
  constructor () {
    this.intRefProp = Symbol('int')
    this._map = []
  }

  /**
   * Adds an object to the referance map returning an int to be used as a
   * referance
   * @param {*} obj
   * @param {*} type - optional
   * @return {integer}
   */
  add (obj, type) {
    let ref = obj[this.intRefProp]
    if (ref === undefined) {
      ref = this._map.push({obj, type}) - 1
      obj[this.intRefProp] = ref
    }
    return ref
  }

  /**
   * gets a POJO given a refernce as an int
   * @param {integer} ref
   * @param {Object} type - optional
   * @return {*}
   */
  get (ref, typeCheck) {
    const {obj, type} = this._map[ref]
    if (obj === undefined || (typeCheck && type !== typeCheck)) {
      throw new Error('invalid referance')
    }
    return obj
  }

  /**
   * deletes an object given a referance as an int
   * @param {integer}
   * @return {boolean} whether or not the object was deleted
   */
  delete (ref) {
    delete this._map[ref][this.intRefProp]
    delete this._map[ref]
  }

  /**
   * clears the referance map of a objects
   */
  clear () {
    this._map.forEach(el => {
      delete el[this.intRefProp]
    })
    this._map = []
  }

  /**
   * returns the number of items in the refernace map
   * @return {integer}
   */
  get size () {
    return this._map.length
  }

  /**
   * tests wether a given referance is valid or not
   * @return {boolean}
   */
  has (ref) {
    const obj = this._map[ref]
    return obj !== undefined
  }
}
