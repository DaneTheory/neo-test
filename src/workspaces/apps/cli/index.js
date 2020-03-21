const pkg = require('./package.json')


const cli = props => {
  let prevTime = new Date.now()

  console.log('[CLI] Hello!')

  const { name, version } = pkg

  return {
    name: name,
    version: version,
    uptime: (new Date.now() - prevTime)
  }
}
