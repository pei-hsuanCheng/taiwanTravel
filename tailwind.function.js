const setData = (start = 1, end = 1, Interval = 1, unit = 'px') => {
  const result = {}
  if (unit === null) {
    unit = ''
  }
  for (let i = start; i <= end; i += Interval) {
    result[i] = `${i}${unit}`
  }
  return result
}

module.exports = {
  setData
}
