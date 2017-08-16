module.exports = class ReferanceMap {
  /**
   * Handle mapping arbitary JS object to ints
   */
  constructor () {
    this._map = []
  }

  /**
   * Adds an object to the referance map returning an int to be used as a
   * referance
   * @param {*} obj
   * @return {integer}
   */
  add (obj) {
    return this._map.push(obj) - 1
  }

  /**
   * gets a POJO given a refernce as an int
   * @param {integer} ref
   * @return {*}
   */
  get (ref) {
    const obj = this._map[ref]
    if (obj === undefined) {
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
    delete this._map[ref]
  }

  /**
   * clears the referance map of a objects
   */
  clear () {
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
