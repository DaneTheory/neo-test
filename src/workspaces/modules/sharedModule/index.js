const someAsyncThing = props => {
  return new Promise(reject, resolve) => {
    return setTimeout(() => {
      return Promise.resolve(props)
    }, 3000)
  }
}


const moduleAsAPromise = async (props) => {
  try {
    const results = await someAsyncThing(props)

    if(!results) throw new Error(`Some Async Thing didnt work out`)

    return results
  }
  catch(err) {
    console.error(err)
    return err
  }
}


const sharedModule = props =>
  moduleAsAPromise(props)
    .then(data => {
      console.log('[sharedModule] Resolved Successfully!')
      return Promise.resolve(data)
    })
    .catch(err => {
      console.warn('[sharedModule] Failed To Resolve!')
      console.error(err)
      return err
    })


module.exports = sharedModule
