const tape = require('tape')
const ReferanceMap = require('../index.js')

tape('referance mapping', t => {
  t.plan(7)
  const referanceMap = new ReferanceMap()
  const obj1 = {}
  const obj2 = {}
  const ref1 = referanceMap.add(obj1)
  const ref2 = referanceMap.add(obj2)
  t.equals(ref1, 0, 'should produce correct refs')
  t.equals(ref2, 1, 'should produce correct refs')

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

  referanceMap.clear()
  try {
    referanceMap.get(ref2)
  } catch (e) {
    t.true(true, 'should clear refances')
  }
})
