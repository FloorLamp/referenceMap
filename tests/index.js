const tape = require('tape')
const ReferanceMap = require('../index.js')

tape('referance mapping', t => {
  t.plan(11)
  const referanceMap = new ReferanceMap()
  const obj1 = {}
  const obj2 = {}
  const ref1 = referanceMap.add(obj1)
  const ref2 = referanceMap.add(obj2)
  t.equals(ref1, 0, 'should produce correct refs')
  t.equals(ref2, 1, 'should produce correct refs')

  t.equals(referanceMap.has(ref1), true, 'should detect if it has the ref')

  const foundObj1 = referanceMap.get(ref1)
  const foundObj2 = referanceMap.get(ref2)

  t.equals(foundObj1, obj1, 'should get the correct object')
  t.equals(foundObj2, obj2, 'should get the correct object')

  t.equals(referanceMap.size, 2, 'should return the correct size')

  referanceMap.delete(ref1)
  try {
    referanceMap.get(ref1)
  } catch (e) {
    t.true(true, 'should delete refances')
  }

  t.equals(referanceMap.has(ref1), false, 'should detect if it does not has the ref')

  referanceMap.clear()
  try {
    referanceMap.get(ref2)
  } catch (e) {
    t.true(true, 'should clear refances')
  }

  const aMap = new Map()
  const ref3 = referanceMap.add(aMap)
  t.equals(referanceMap.get(ref3, Map), aMap)
  try {
    referanceMap.get(ref3, Set)
  } catch (e) {
    t.true(true, 'should throw if wrong type')
  }
})
