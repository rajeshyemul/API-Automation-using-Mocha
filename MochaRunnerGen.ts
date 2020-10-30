import globby from 'globby'
const Mocha = require('mocha')
/**
 * This file is to trigger API tests.
 * Use: npm run api-test
 *
 * options:
 * path: provide specific folder name to pick up test files inside it and it's sub-folders.
 * default : out-js/tests/cardconsole/api
 *
 * category: To provide test case category.
 * Values: E2E, WIP & Local(default)
 *
 * Complete command example:
 * npm run runner
 * npm run runner -- path=tests/cardconsole/api/orchestration/service/card category=E2E type=Sanity
 *
 */
export const run = async () => {
  const local = '.test.js'

  const args = process.argv.filter(arg => arg.includes('='))
  let rootPath = args.find(arg => arg.includes('path'))
  let type = args.find(arg => arg.includes('type'))
  if (rootPath) {
    rootPath = `out-js/${rootPath.split('=')[1]}`
  } else {
    rootPath = 'out-js/tests'
  }

  if (type) {
    type = type.split('=')[1]
  }

  let testPaths

    testPaths = await globby([`${rootPath}/**/*${local}`])

  const reportPath = `results/executions/${new Date().toLocaleString().replace(/\/|,|:|\s/g, '_')}`

  const mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: 'API Test Report',
      reportDir: reportPath,
      overwrite: false,
      json: false
    },
    timeout: 20000,
    ...type && {fgrep: `${type}`}
  })
  for (const eachTest of testPaths) {
    mocha.addFile(eachTest)
  }
  mocha.run()
}
run().then(() => {
})
