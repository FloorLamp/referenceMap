const Rmap = require('../')

function main () {
  let start = new Date()
  const map = new Rmap()
  let num = 1000000
  while (--num) {
    map.add({})
  }

  const end = new Date() - start
  console.info('Execution time: %dms', end)
}

main()
