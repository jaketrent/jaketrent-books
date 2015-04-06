function fmtStorePath(key) {
  return `./${key}/${key}-store`
}

exports.initFromServer = () => {
  if (window.initialState) {
    Object.keys(window.initialState).forEach((key) => {
      try {
        require(`../${key}/${key}-store`).init(window.initialState[key])
      } catch (e) {
        console.log(`No ${fmtStorePath(key)}#init for ${key} initialState`)
      }
    })
  }
}