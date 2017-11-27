const dataCsvStr = '# \npxname,svname,\nhttp-in,FRONTEND,\nadmin,BACKEND,'

const request = (url) => {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () =>
        dataCsvStr.length > 0
          ? resolve(dataCsvStr)
          : reject(new Error('HAProxy server not found.'))
    )
  })
}

export default request
