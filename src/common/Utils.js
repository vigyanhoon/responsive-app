const sortByDate = (arr, key) => {
  const arrCopy = [...arr]
  return arrCopy.sort((a,b) => {
    return b[key] - a[key]
  })
}

export { sortByDate };